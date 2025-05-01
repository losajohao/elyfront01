<script setup lang="ts">
const props = defineProps<{ msg: string }>()
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <h1 class="text-4xl font-bold text-blue-500">{{props.msg}}</h1>
  </div>
</template>