import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routers/router'

// components
import Header from '@/UI/containers/header/Header.vue'
const app = createApp(App)

app.use(router)

//app.component('Header', Header)

app.mount('#app')
