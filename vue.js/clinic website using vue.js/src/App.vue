<script setup>
import { RouterView } from 'vue-router'
import SidebarMenu from './components/SidebarMenu.vue'
</script>

<template>
  <div class="app-container">
    <SidebarMenu />
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
}
.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
  overflow-y: auto;
}
</style>