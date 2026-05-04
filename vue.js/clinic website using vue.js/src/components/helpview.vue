<script setup>
const helpTopics = [
  { title: '📝 Check-in', desc: 'Fill patient details and select symptoms' },
  { title: '👥 Queue', desc: 'Call next patient and complete check-ins' },
  { title: '🎮 Game', desc: 'Move doctor, collect health tips, level up!' }
]
</script>

<template>
  <div>
    <h1 class="page-title">Help & Support</h1>
    
    <div style="display: grid; gap: 20px;">
      <div v-for="topic in helpTopics" :key="topic.title" class="card">
        <h3>{{ topic.title }}</h3>
        <p>{{ topic.desc }}</p>
      </div>
    </div>
  </div>
</template>