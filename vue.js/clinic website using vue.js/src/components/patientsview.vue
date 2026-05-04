<script setup>
import { useClinicStore } from '../stores/clinicStore'

const store = useClinicStore()
</script>

<template>
  <div>
    <h1 class="page-title">Patient Records</h1>
    
    <div class="card">
      <table class="table">
        <thead>
          <tr><th>Queue #</th><th>Name</th><th>National ID</th><th>Symptoms</th><th>Time</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr v-for="patient in store.patients" :key="patient.id">
            <td>#{{ patient.queueNumber }}</td>
            <td>{{ patient.name }}</td>
            <td>{{ patient.nationalID }}</td>
            <td>{{ patient.symptoms?.join(', ') }}</td>
            <td>{{ patient.checkinTime }}</td>
            <td><span :class="['badge', patient.status === 'waiting' ? 'badge-warning' : 'badge-success']">{{ patient.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>