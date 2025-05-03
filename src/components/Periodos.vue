<template>
  <div class="periodos-container relative">
    <div class="absolute top-2 right-2">
      <button @click="toggleMenu" class="text-gray-500 hover:text-gray-700 focus:outline-none">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
      <div v-if="showMenu" class="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a @click="openModal" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Agregar</a>
        </div>
      </div>
    </div>
    <h2 class="text-lg font-semibold mb-2 flex">Periodos</h2>

    <!-- Modal -->
    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Background overlay, when the modal is open -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <!-- Modal panel -->
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Agregar nuevo periodo
            </h3>
            <form @submit.prevent="addPeriod">
              <div class="mt-2">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="year">
                  Año:
                </label>
                <input v-model="newPeriod.year" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="year" type="text" placeholder="2023-2024">
              </div>

              <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="start_date">
                  Fecha de inicio:
                </label>
                <input v-model="newPeriod.start_date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="start_date" type="date" placeholder="Fecha de inicio">
              </div>

              <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="end_date">
                  Fecha de fin:
                </label>
                <input v-model="newPeriod.end_date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="end_date" type="date" placeholder="Fecha de fin">
              </div>

              <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="is_current">
                  Es actual:
                </label>
                <input v-model="newPeriod.is_current" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="is_current" type="checkbox">
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Guardar
                </button>
                <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="closeModal">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


    <table class="table-auto w-full mt-4">
      <thead>
        <tr>
          <th class="px-4 py-2">Año</th>
          <th class="px-4 py-2">Fecha de inicio</th>
          <th class="px-4 py-2">Fecha de fin</th>
          <th class="px-4 py-2">Es actual</th>
          <th class="px-4 py-2">Acciones</th>
        </tr>
      </thead>
      <tbody v-if="periodsStore.periods.length > 0">
        <tr v-for="period in periodsStore.periods" :key="period.id">
          <td class="border px-4 py-2">{{ period.year }}</td>
          <td class="border px-4 py-2">{{ period.start_date }}</td>
          <td class="border px-4 py-2">{{ period.end_date }}</td>
          <td class="border px-4 py-2">{{ period.is_current ? 'Sí' : 'No' }}</td>
          <td class="border px-4 py-2">
            <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Editar</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="5" class="border px-4 py-2 text-center">No hay periodos disponibles.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePeriodsStore } from '../stores/periods';
import { storeToRefs } from 'pinia';

const showMenu = ref(false);
const showModal = ref(false);
const periodsStore = usePeriodsStore();
const { periods } = storeToRefs(periodsStore);

const newPeriod = ref({
  year: '',
  start_date: '',
  end_date: '',
  is_current: false,
});

onMounted(() => {
  periodsStore.fetchPeriods();
});

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const openModal = () => {
  showMenu.value = false;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const addPeriod = async () => {
  try {
    await periodsStore.createPeriod(newPeriod.value);
    closeModal();
    newPeriod.value = {
      year: '',
      start_date: '',
      end_date: '',
      is_current: false,
    };
  } catch (error) {
    console.error('Error al crear periodo', error);
  }
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
