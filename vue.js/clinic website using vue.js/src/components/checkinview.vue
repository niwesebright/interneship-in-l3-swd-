<script setup>
import { ref } from 'vue'
import { useClinicStore } from '../stores/clinicStore'

const store = useClinicStore()
const name = ref('')
const nationalID = ref('')
const selectedSymptoms = ref([])
const message = ref('')
const messageType = ref('')

const submitCheckIn = () => {
  // Conditional validation
  if (!name.value || !nationalID.value) {
    message.value = 'Please fill all fields'
    messageType.value = 'danger'
    return
  }
  
  if (selectedSymptoms.value.length === 0) {
    message.value = 'Please select at least one symptom'
    messageType.value = 'danger'
    return
  }
  
  const result = store.addPatient({
    name: name.value,
    nationalID: nationalID.value,
    symptoms: selectedSymptoms.value
  })
  
  if (result.success) {
    message.value = result.message
    messageType.value = 'success'
    name.value = ''
    nationalID.value = ''
    selectedSymptoms.value = []
  } else {
    message.value = result.message
    messageType.value = 'danger'
  }
  
  setTimeout(() => { message.value = '' }, 3000)
}

const cancelRegistration = () => {
  name.value = ''
  nationalID.value = ''
  selectedSymptoms.value = []
  message.value = 'Registration cancelled'
  messageType.value = 'info'
  setTimeout(() => { message.value = '' }, 2000)
}
</script>

<template>
  <div>
    <h1 class="page-title">Patient Check-in</h1>
    
    <div v-if="message" :class="['alert', `alert-${messageType}`]">{{ message }}</div>
    
    <!-- Toggle between form and queue status -->
    <div v-if="!store.isRegistered" class="card">
      <h2>Registration Form</h2>
      
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" v-model="name" class="form-control" placeholder="Enter name">
      </div>
      
      <div class="form-group">
        <label>National ID</label>
        <input type="text" v-model="nationalID" class="form-control" placeholder="Enter ID">
      </div>
      
      <div class="form-group">
        <label>Symptoms</label>
        <div v-for="symptom in store.availableSymptoms" :key="symptom.id" style="margin: 5px 0;">
          <label>
            <input type="checkbox" :value="symptom.name" v-model="selectedSymptoms">
            {{ symptom.icon }} {{ symptom.name }}
          </label>
        </div>
      </div>
      
      <div style="display: flex; gap: 10px;">
        <button @click="submitCheckIn" class="btn btn-primary">Submit</button>
        <button @click="cancelRegistration" class="btn btn-danger">Cancel</button>
      </div>
    </div>
    
    <div v-else class="card" style="text-align: center;">
      <h2>✅ Successfully Registered!</h2>
      <p>Queue Number:</p>
      <p style="font-size: 48px; color: var(--secondary-color);">#{{ store.currentPatient?.queueNumber }}</p>
      <button @click="store.clearCurrentPatient" class="btn btn-primary">New Check-in</button>
    </div>
  </div>
</template>