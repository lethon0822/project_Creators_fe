import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/components/common/Login.vue') },
    { path: '/', component: () => import('@/components/common/Main.vue') },
  ],
});

export default router;
