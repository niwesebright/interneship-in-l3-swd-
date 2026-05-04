<script setup>
import { useClinicStore } from '../stores/clinicStore'
import { ref } from 'vue'

const store = useClinicStore()
const message = ref('')
const msgType = ref('')

const move = (direction) => {
  const moved = store.moveNPC(direction)
  if (moved) {
    store.updateGameScore(10)
    message.value = '✅ Moved! +10 points'
    msgType.value = 'success'
  } else {
    store.updateGameScore(-5)
    message.value = '❌ Cannot move! -5 points'
    msgType.value = 'danger'
  }
  setTimeout(() => { message.value = '' }, 2000)
}

const collectItem = () => {
  if (store.gameStats.level >= 2) {
    store.updateGameScore(25)
    message.value = '🌟 Health booster! +25 points'
  } else {
    store.updateGameScore(5)
    message.value = '📚 Get to level 2 for boosters! +5 points'
  }
  msgType.value = 'success'
  setTimeout(() => { message.value = '' }, 2000)
}
</script>

<template>
  <div>
    <h1 class="page-title">🎮 Health Guide Game</h1>
    
    <div class="card">
      <div style="display: flex; gap: 20px; margin-bottom: 20px;">
        <div class="stat">Score: {{ store.gameStats.score }}</div>
        <div class="stat">Level: {{ store.gameStats.level }}</div>
        <div class="stat">Tips: {{ store.gameStats.tipsGiven }}</div>
      </div>
      
      <div v-if="message" :class="['alert', `alert-${msgType}`]">{{ message }}</div>
      
      <!-- NPC Movement Grid using v-for loop -->
      <div style="display: flex; justify-content: center; gap: 10px; margin: 30px 0;">
        <div v-for="i in 5" :key="i" 
             :style="{ width: '60px', height: '60px', border: '2px solid #ddd', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', background: store.gameStats.npcPosition === i-1 ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'white' }">
          {{ store.gameStats.npcPosition === i-1 ? '👨‍⚕️' : '⬜' }}
        </div>
      </div>
      
      <div style="display: flex; gap: 10px; justify-content: center;">
        <button @click="move('left')" class="btn btn-primary">⬅️ Left</button>
        <button @click="move('right')" class="btn btn-primary">➡️ Right</button>
        <button @click="collectItem" class="btn btn-success">⭐ Collect</button>
        <button @click="store.resetGame()" class="btn btn-warning">🔄 Reset</button>
      </div>
      
      <!-- Conditional level messages -->
      <div v-if="store.gameStats.level === 2" class="alert alert-success" style="margin-top: 20px;">
        🎉 Level 2 Unlocked! Health boosters available!
      </div>
      <div v-if="store.gameStats.level === 3" class="alert alert-success" style="margin-top: 20px;">
        🏆 Master Healer! Great job!
      </div>
    </div>
  </div>
</template>

<style scoped>
.stat { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 10px 20px; border-radius: 8px; }
</style>