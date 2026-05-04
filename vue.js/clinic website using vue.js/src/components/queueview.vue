<script setup>
import { useClinicStore } from '../stores/clinicStore'

const store = useClinicStore()

const callNext = () => {
  const next = store.waitingPatients[0]
  if (next) {
    store.updatePatientStatus(next.id, 'in-progress')
    alert(`Now serving: ${next.name} (Queue #${next.queueNumber})`)
  }
}

const complete = (id) => {
  store.updatePatientStatus(id, 'completed')
}
</script>

<template>
  <div>
    <h1 class="page-title">Current Queue</h1>
    
    <button @click="callNext" class="btn btn-success" style="margin-bottom: 20px;">Call Next Patient</button>
    
    <div class="card">
      <table class="table" v-if="store.waitingPatients.length > 0">
        <thead>
          <tr><th>Queue #</th><th>Name</th><th>ID</th><th>Symptoms</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr v-for="patient in store.waitingPatients" :key="patient.id">
            <td>#{{ patient.queueNumber }}</td>
            <td>{{ patient.name }}</td>
            <td>{{ patient.nationalID }}</td>
            <td>{{ patient.symptoms?.join(', ') }}</td>
            <td><button @click="complete(patient.id)" class="btn btn-primary btn-sm">Complete</button></td>
          </tr>
        </tbody>
      </table>
      <div v-else style="text-align: center; padding: 40px;">Queue is empty! 🎉</div>
    </div>
  </div>
</template>

<style scoped>
.btn-sm { padding: 5px 10px; font-size: 12px; }
</style>