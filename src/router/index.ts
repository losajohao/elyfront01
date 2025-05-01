import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Configuraciones from '../views/Configuraciones.vue';
import Estudiantes from '../views/Estudiantes.vue';
import Docentes from '../views/Docentes.vue';
import Calificaciones from '../views/Calificaciones.vue';
import Asistencia from '../views/Asistencia.vue';
import Cuenta from '../views/Cuenta.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/configuraciones',
      name: 'configuraciones',
      component: Configuraciones
    },
    {
      path: '/estudiantes',
      name: 'estudiantes',
      component: Estudiantes
    },
    {
      path: '/docentes',
      name: 'docentes',
      component: Docentes
    },
    {
      path: '/calificaciones',
      name: 'calificaciones',
      component: Calificaciones
    },
    {
      path: '/asistencia',
      name: 'asistencia',
      component: Asistencia
    },
    {
      path: '/cuenta',
      name: 'cuenta',
      component: Cuenta
    }
  ]
})

export default router
