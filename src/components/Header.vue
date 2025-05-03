<template>
  <header class="py-2 px-4 m-2 flex items-center justify-between shadow-lg">
    <div class="flex items-center space-x-4">
      <div class="text-gray-500">Dashboard > Products > All Products</div>
    </div>
    <div class="flex items-center space-x-4">
      <input type="text" placeholder="Search..." class="border border-gray-300 rounded-md px-2 py-1 mr-2">
      <div class="rounded-full bg-gray-200 w-8 h-8"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
