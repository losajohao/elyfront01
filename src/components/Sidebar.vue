<template>
<aside class="w-28 bg-gray-800 text-white fixed top-0 left-0 h-full z-10 p-2">
    <div class="flex flex-col items-center py-2 px-4">
        <font-awesome-icon icon="fa-solid fa-graduation-cap" class="w-16 h-16" />
      </div>
      <hr class="border-gray-700 w-4/5 my-2">
    <ul>
      
      <li class="py-2 px-4 hover:bg-blue-700">
        <router-link to="/configuraciones" class="flex flex-col items-center justify-center">
          <font-awesome-icon icon="fa-solid fa-gear" class="w-6 h-6 mb-1" />
          <span class="text-sm">Configuraciones</span>
        </router-link>
      </li>
      <li class="py-2 px-4 hover:bg-blue-700">
        <router-link to="/estudiantes" class="flex flex-col items-center justify-center">
          <font-awesome-icon icon="fa-solid fa-user-graduate" class="w-6 h-6 mb-1" />
          <span class="text-sm">Estudiantes</span>
        </router-link>
      </li>
      <li class="py-2 px-4 hover:bg-blue-700">
        <router-link to="/docentes" class="flex flex-col items-center justify-center">
          <font-awesome-icon icon="fa-solid fa-chalkboard-teacher" class="w-6 h-6 mb-1" />
          <span class="text-sm">Docentes</span>
        </router-link>
      </li>
      <li class="py-2 px-4 hover:bg-blue-700">
        <router-link to="/calificaciones" class="flex flex-col items-center justify-center">
          <font-awesome-icon icon="fa-solid fa-star" class="w-6 h-6 mb-1" />
          <span class="text-sm">Calificaciones</span>
        </router-link>
      </li>
      <li class="py-2 px-4 hover:bg-blue-700">
        <router-link to="/asistencia" class="flex flex-col items-center justify-center">
          <font-awesome-icon icon="fa-solid fa-check-square" class="w-6 h-6 mb-1" />
          <span class="text-sm">Asistencia</span>
        </router-link>
      </li>
      <li class="py-2 px-4 hover:bg-blue-700">
        <router-link to="/cuenta" class="flex flex-col items-center justify-center">
          <font-awesome-icon icon="fa-solid fa-user" class="w-6 h-6 mb-1" />
          <span class="text-sm">Cuenta</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGear, faUserGraduate, faChalkboardTeacher, faStar, faCheckSquare, faUser, faQuestionCircle, faCalendar, faGraduationCap, faHouse, faBook, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'vue-router';

library.add(faGear, faUserGraduate, faChalkboardTeacher, faStar, faCheckSquare, faUser, faQuestionCircle, faCalendar, faGraduationCap, faHouse, faBook, faUsers, faEnvelope);

const router = useRouter();
</script>

<style scoped>

</style>
