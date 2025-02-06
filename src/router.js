import { createMemoryHistory, createRouter } from 'vue-router'



const routes = [
  { path: '/', component: import('@/UI/pages/HomePage.vue') },
  { path: '/about', component: import('@/UI/pages/HomePage.vue') },
  { path: '/portofolio', component: import('@/UI/pages/HomePage.vue') },
  { path: '/snipet', component: import('@/UI/pages/HomePage.vue') },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})