<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const menuItems = [
  { name: 'Dashboard', icon: '📊', path: '/dashboard' },
  { name: 'Check-in', icon: '📝', path: '/checkin' },
  { name: 'Queue', icon: '👥', path: '/queue' },
  { name: 'Patients', icon: '👨‍⚕️', path: '/patients' },
  { name: 'Health Game', icon: '🎮', path: '/game' },
  { name: 'Profile', icon: '👤', path: '/profile' },
  { name: 'Settings', icon: '⚙️', path: '/settings' },
  { name: 'Help', icon: '❓', path: '/help' }
]

const navigateTo = (path) => router.push(path)
const isActive = (path) => route.path === path
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h2>🏥 Clinic System</h2>
    </div>
    <nav>
      <div v-for="item in menuItems" :key="item.name" 
           class="nav-item" :class="{ active: isActive(item.path) }"
           @click="navigateTo(item.path)">
        <span class="icon">{{ item.icon }}</span>
        <span>{{ item.name }}</span>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background: linear-gradient(135deg, #1a2a3a, #0f1a24);
  color: white;
  min-height: 100vh;
  padding: 20px 0;
}
.sidebar-header {
  padding: 0 20px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  margin-bottom: 20px;
}
.nav-item {
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 12px;
}
.nav-item:hover, .nav-item.active {
  background: rgba(255,255,255,0.1);
}
.icon {
  font-size: 20px;
}
</style>