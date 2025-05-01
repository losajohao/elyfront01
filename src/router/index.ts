import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PeriodsView from '../views/Periods.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'periods',
          name: 'periods',
          component: PeriodsView
        }
      ]
    }
  ]
})

export default router
