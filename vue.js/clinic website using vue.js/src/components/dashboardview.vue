<script setup>
import { useClinicStore } from '../stores/clinicStore'
import { onMounted, computed } from 'vue'

const store = useClinicStore()

onMounted(() => {
  store.initializeClinic()
})

const stats = computed(() => ({
  total: store.patients.length,
  waiting: store.waitingPatients.length,
  completed: store.patients.filter(p => p.status === 'completed').length
}))
</script>

<template>
  <div>
    <h1 class="page-title">Dashboard</h1>
    
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px;">
      <div class="card" style="text-align: center;">
        <h3>Total Patients</h3>
        <p style="font-size: 36px; color: var(--secondary-color);">{{ stats.total }}</p>
      </div>
      <div class="card" style="text-align: center;">
        <h3>Waiting</h3>
        <p style="font-size: 36px; color: var(--warning-color);">{{ stats.waiting }}</p>
      </div>
      <div class="card" style="text-align: center;">
        <h3>Completed</h3>
        <p style="font-size: 36px; color: var(--success-color);">{{ stats.completed }}</p>
      </div>
    </div>
    
    <div class="card">
      <h3>Recent Patients</h3>
      <table class="table">
        <thead>
          <tr><th>Queue #</th><th>Name</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr v-for="patient in store.patients.slice(-5)" :key="patient.id">
            <td>#{{ patient.queueNumber }}</td>
            <td>{{ patient.name }}</td>
            <td><span :class="['badge', patient.status === 'waiting' ? 'badge-warning' : 'badge-success']">{{ patient.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>