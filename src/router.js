import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/UI/view/HomePage.vue') },
  { path: '/about', component: import('@/UI/view/HomePage.vue') },
  { path: '/portofolio', component: import('@/UI/view/HomePage.vue') },
  { path: '/snipet', component: import('@/UI/view/HomePage.vue') },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
