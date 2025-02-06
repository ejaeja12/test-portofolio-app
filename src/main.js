import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

// components
import Header from '@/UI/components/header/Header.vue'
const app = createApp(App)

app.use(router)

app.component('Header', Header)

app.mount('#app')
