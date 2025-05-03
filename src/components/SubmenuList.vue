<template>
  <ul class="submenu-list">
    <li v-for="item in items" :key="item.name">
      <a :href="item.path">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.submenu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.submenu-list li {
  margin-bottom: 5px;
}

.submenu-list li a {
  color: #333;
  text-decoration: none;
}
</style>
