<template>
  <div class="flex h-full">
    <div class="w-1/3 bg-white rounded-md shadow-md p-4">
      <div class="flex flex-col items-center">
        <div class="rounded-full bg-gray-200 w-32 h-32 mb-4"></div>
        <h2 class="text-xl font-semibold">Arthur</h2>
        <p class="text-gray-600">Account Director</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Change Image
        </button>
      </div>
    </div>
    <div class="w-2/3 bg-white rounded-md shadow-md p-4 ml-4">
      <h2 class="text-xl font-semibold mb-4">Información Personal</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
            Nombre
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="Nombre">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">
            Apellido
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Apellido">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="dni">
            DNI
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dni" type="text" placeholder="DNI">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
            Teléfono
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Teléfono">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="specialization">
            Especialización
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="specialization" type="text" placeholder="Especialización">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>
