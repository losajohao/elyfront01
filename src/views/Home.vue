<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>

<template>
  <div class="h-full flex flex-col">

    <div class="flex flex-1 overflow-hidden">
      <Sidebar />

      <main class="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <router-view />
      </main>
    </div>

  </div>
</template>
