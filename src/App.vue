<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-28 bg-gray-800 text-white flex flex-col">
      <Sidebar />
    </aside>

    <!-- Main content -->
    <div class="flex flex-col flex-1">
      <!-- Header -->
      <Header />

      <!-- Dynamic content -->
      <main class="flex-1 overflow-y-auto p-4 bg-gray-100">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
</script>
