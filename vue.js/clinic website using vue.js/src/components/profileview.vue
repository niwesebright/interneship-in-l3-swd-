<script setup>
import { useClinicStore } from '../stores/clinicStore'

const store = useClinicStore()
</script>

<template>
  <div>
    <h1 class="page-title">Doctor Profile</h1>
    
    <div class="card" style="text-align: center;">
      <div style="font-size: 80px; margin-bottom: 20px;">👨‍⚕️</div>
      <h2>Dr. Sarah Johnson</h2>
      <p>Head Physician - General Medicine</p>
      <p>📧 dr.sarah@clinic.com</p>
      <hr>
      <div style="display: flex; gap: 20px; justify-content: center;">
        <div><strong>Patients Treated</strong><br>{{ store.patients.filter(p => p.status === 'completed').length }}</div>
        <div><strong>Total Check-ins</strong><br>{{ store.queueNumber - 1 }}</div>
      </div>
    </div>
  </div>
</template>