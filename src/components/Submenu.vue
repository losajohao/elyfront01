<template>
  <div class="submenu">
    <h2>Submenú de {{ menu }}</h2>
    <SubmenuList :items="getSubmenus(menu)" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import SubmenuList from './SubmenuList.vue';

const props = defineProps({
  menu: {
    type: String,
    required: true
  }
});

const submenus = {
  configuraciones: [
    { name: 'Perfil', path: 'perfil' },
    { name: 'Periodos', path: 'periodos' },
    { name: 'Seguridad', path: 'seguridad' }
  ],
  estudiantes: [],
  docentes: [],
  calificaciones: [],
  asistencia: [],
  cuenta: []
};

const getSubmenus = (menu) => {
  return submenus[menu] || [];
};
</script>

<style scoped>
.submenu {
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}
</style>
