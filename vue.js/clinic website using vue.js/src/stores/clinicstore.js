import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useClinicStore = defineStore('clinic', () => {
  // State variables - Patient list array
  const patients = ref([])
  const queueNumber = ref(1)
  const isRegistered = ref(false)
  const currentPatient = ref(null)
  
  // Game stats
  const gameStats = ref({
    score: 0,
    level: 1,
    npcPosition: 0,
    tipsGiven: 0
  })
  
  // Symptoms array for checkboxes
  const availableSymptoms = ref([
    { id: 1, name: 'Fever', icon: '🌡️' },
    { id: 2, name: 'Cough', icon: '🤧' },
    { id: 3, name: 'Headache', icon: '🤕' },
    { id: 4, name: 'Fatigue', icon: '😴' },
    { id: 5, name: 'Shortness of Breath', icon: '😮‍💨' }
  ])
  
  // Computed properties
  const waitingPatients = computed(() => 
    patients.value.filter(p => p.status === 'waiting')
  )
  
  // Functions - Add new patient
  const addPatient = (patientData) => {
    // Form validation with conditional
    if (!patientData.name || !patientData.nationalID) {
      return { success: false, message: 'All fields required' }
    }
    
    const newPatient = {
      id: Date.now(),
      queueNumber: queueNumber.value,
      checkinTime: new Date().toLocaleString(),
      status: 'waiting',
      ...patientData
    }
    
    patients.value.push(newPatient)
    queueNumber.value++
    isRegistered.value = true
    currentPatient.value = newPatient
    
    return { success: true, message: `Queue #${newPatient.queueNumber}`, patient: newPatient }
  }
  
  const updatePatientStatus = (patientId, newStatus) => {
    const patient = patients.value.find(p => p.id === patientId)
    if (patient) {
      patient.status = newStatus
      return true
    }
    return false
  }
  
  const clearCurrentPatient = () => {
    isRegistered.value = false
    currentPatient.value = null
  }
  
  // Game functions with NPC movement
  const moveNPC = (direction) => {
    if (direction === 'left' && gameStats.value.npcPosition > 0) {
      gameStats.value.npcPosition--
      return true
    } else if (direction === 'right' && gameStats.value.npcPosition < 4) {
      gameStats.value.npcPosition++
      return true
    }
    return false
  }
  
  const updateGameScore = (points) => {
    gameStats.value.score += points
    gameStats.value.tipsGiven++
    
    // Conditional level up logic
    if (gameStats.value.score >= 100 && gameStats.value.level === 1) {
      gameStats.value.level = 2
    } else if (gameStats.value.score >= 250 && gameStats.value.level === 2) {
      gameStats.value.level = 3
    }
  }
  
  const resetGame = () => {
    gameStats.value = { score: 0, level: 1, npcPosition: 0, tipsGiven: 0 }
  }
  
  // Initialize clinic with sample data
  const initializeClinic = () => {
    if (patients.value.length === 0) {
      patients.value = [
        { id: 1, name: 'John Doe', nationalID: 'ID123456', symptoms: ['Fever'], queueNumber: 1, checkinTime: '2024-01-15 09:30', status: 'completed' },
        { id: 2, name: 'Jane Smith', nationalID: 'ID789012', symptoms: ['Cough'], queueNumber: 2, checkinTime: '2024-01-15 10:00', status: 'waiting' }
      ]
      queueNumber.value = 3
    }
  }
  
  return {
    patients,
    queueNumber,
    isRegistered,
    currentPatient,
    gameStats,
    availableSymptoms,
    waitingPatients,
    addPatient,
    updatePatientStatus,
    clearCurrentPatient,
    moveNPC,
    updateGameScore,
    resetGame,
    initializeClinic
  }
})