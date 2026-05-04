import { createRouter, createWebHistory } from 'vue-router'

const DashboardView = () => import('../components/DashboardView.vue')
const CheckinView = () => import('../components/CheckinView.vue')
const PatientsView = () => import('../components/PatientsView.vue')
const QueueView = () => import('../components/QueueView.vue')
const HelpView = () => import('../components/HelpView.vue')
const ProfileView = () => import('../components/ProfileView.vue')
const SettingsView = () => import('../components/SettingsView.vue')
const GameGuide = () => import('../components/GameGuide.vue')

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView },
  { path: '/checkin', name: 'Check-in', component: CheckinView },
  { path: '/patients', name: 'Patients', component: PatientsView },
  { path: '/queue', name: 'Queue', component: QueueView },
  { path: '/profile', name: 'Profile', component: ProfileView },
  { path: '/help', name: 'Help', component: HelpView },
  { path: '/settings', name: 'Settings', component: SettingsView },
  { path: '/game', name: 'Health Game', component: GameGuide }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router