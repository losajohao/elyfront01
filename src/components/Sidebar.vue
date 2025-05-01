<template>
  <aside class="w-23 bg-gray-800 text-white absolute top-0 left-0 h-full z-10">
    <ul>
      <li class="flex flex-col items-center py-2 px-4">
        <font-awesome-icon icon="fa-solid fa-graduation-cap" class="w-16 h-16" />
      </li>
      <hr class="border-gray-700 w-4/5 my-2">
      
      <li class="flex flex-col items-center py-2 px-4 hover:bg-blue-700">
        <font-awesome-icon icon="fa-solid fa-gear" class="w-6 h-6" />
        <span>Configuraciones</span>
      </li>
      <li class="flex flex-col items-center py-2 px-4 hover:bg-blue-700">
        <font-awesome-icon icon="fa-solid fa-user-graduate" class="w-6 h-6" />
        <span>Estudiantes</span>
      </li>
      <li class="flex flex-col items-center py-2 px-4 hover:bg-blue-700">
        <font-awesome-icon icon="fa-solid fa-chalkboard-teacher" class="w-6 h-6" />
        <span>Docentes</span>
      </li>
      <li class="flex flex-col items-center py-2 px-4 hover:bg-blue-700">
        <font-awesome-icon icon="fa-solid fa-star" class="w-6 h-6" />
        <span>Calificaciones</span>
      </li>
      <li class="flex flex-col items-center py-2 px-4 hover:bg-blue-700">
        <font-awesome-icon icon="fa-solid fa-check-square" class="w-6 h-6" />
        <span>Asistencia</span>
      </li>
      <li class="flex flex-col items-center py-2 px-4 hover:bg-blue-700">
        <font-awesome-icon icon="fa-solid fa-user" class="w-6 h-6" />
        <span>Cuenta</span>
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
