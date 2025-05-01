<template>
  <div class="configuraciones-container flex flex-col min-h-screen">
    <header class="configuraciones-header bg-gray-200 p-2 text-center">
      <h1>Configuraciones</h1>
    </header>
    <div class="flex flex-1 ml-60">
      <main class="configuraciones-main bg-gray-100 p-5 w-3/4">
        <section id="general" class="mb-5 p-4 border border-gray-300 rounded-md">
          <h2 class="text-lg font-semibold mb-2">General</h2>
          <p>Contenido de la sección General</p>
        </section>
        <section id="perfil" class="mb-5 p-4 border border-gray-300 rounded-md">
          <h2 class="text-lg font-semibold mb-2">Perfil</h2>
          <p>Contenido de la sección Perfil</p>
        </section>
        <section id="seguridad" class="mb-5 p-4 border border-gray-300 rounded-md">
          <h2 class="text-lg font-semibold mb-2">Seguridad</h2>
          <p>Contenido de la sección Seguridad</p>
        </section>
      </main>
      <aside class="configuraciones-notifications p-4 bg-gray-50 border border-gray-200 rounded-md w-1/4">
        <Submenu menu="configuraciones" />
        <div class="configuraciones-notificaciones mt-4">
          Sección de notificaciones
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import Submenu from '../components/Submenu.vue';
</script>
