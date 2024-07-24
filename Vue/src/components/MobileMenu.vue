<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['toggle-sidebar'])

function toggleSidebar() {
  emit('toggle-sidebar')
}
</script>

<template>
  <nav class="bg-gray-800 text-gray-100 flex justify-between w-full items-center md:hidden">
    <a href="#" class="block p-4 text-white font-bold">TesteFront</a>
    <button
      class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
      @click="toggleSidebar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </nav>
</template>
