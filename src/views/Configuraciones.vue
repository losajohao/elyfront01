<template>
  <div class="configuraciones-container flex flex-col min-h-screen">

    <div class="flex">
      <main class="configuraciones-main z-10 p-1 w-full">
        <div class="bg-white rounded-md shadow-md">
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                :class="{ 'active': activeTab === 'perfil', 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500': activeTab === 'perfil' }"
                @click="activeTab = 'perfil'"
              >
                Perfil
              </a>
            </li>
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                :class="{ 'active': activeTab === 'periodos', 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500': activeTab === 'periodos' }"
                @click="activeTab = 'periodos'"
              >
                Periodos
              </a>
            </li>
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                :class="{ 'active': activeTab === 'seguridad', 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500': activeTab === 'seguridad' }"
                @click="activeTab = 'seguridad'"
              >
                Seguridad
              </a>
            </li>
          </ul>

          <section id="perfil" class="p-4" v-if="activeTab === 'perfil'">
            <Profile />
          </section>

          <section id="periodos" class="p-4" v-if="activeTab === 'periodos'">
            <Periodos />
          </section>

          <section id="seguridad" class="p-4" v-if="activeTab === 'seguridad'">
            <h2 class="text-lg font-semibold mb-2">Seguridad</h2>
            <p>Contenido de la sección Seguridad</p>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import Submenu from '../components/Submenu.vue';
import Profile from '../components/Profile.vue';
import Periodos from '../components/Periodos.vue';
import { ref } from 'vue';

const activeTab = ref('perfil');
</script>
