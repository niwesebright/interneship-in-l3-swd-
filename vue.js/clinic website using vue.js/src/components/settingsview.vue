<script setup>
import { useClinicStore } from '../stores/clinicStore'

const store = useClinicStore()

const clearAll = () => {
  if (confirm('Delete all patient data?')) {
    store.patients = []
    store.queueNumber = 1
    alert('Data cleared!')
  }
}
</script>

<template>
  <div>
    <h1 class="page-title">Settings</h1>
    
    <div class="card">
      <div style="margin-bottom: 20px;">
        <h3>Data Management</h3>
        <button @click="clearAll" class="btn btn-danger">Clear All Data</button>
      </div>
      <hr>
      <p>Clinic System v1.0</p>
    </div>
  </div>
</template>