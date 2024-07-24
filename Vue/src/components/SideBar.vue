<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

const routes = ref([
  { path: '/', title: 'Users List' },
  { path: '/create', title: 'Create User' },
  { path: 'info', title: 'Info Users' }
])
</script>

<template>
  <div
    :class="[
      'sidebar',
      'bg-gray-100',
      'text-gray-900',
      'w-64',
      'px-2',
      'space-y-6',
      'py-6',
      'absolute',
      'md:relative',
      'md:translate-x-0',
      'inset-y-0',
      'left-0',
      'transform',
      'transition',
      'duration-200',
      'ease-in-out',
      'z-30',
      'shadow-md',
      { '-translate-x-full': !props.isVisible }
    ]"
  >
    <a href="/" class="text-gray-900 flex items-center px-4">
      <span class="text-2xl font-bold">TesteFront</span>
    </a>
    <nav>
      <router-link
        v-for="(route, index) in routes"
        :key="index"
        :to="route.path"
        data-test="sidebar"
        class="block cursor-pointer py-2 px-4 rounded hover:bg-gray-200 transition duration-200"
        :class="{ 'bg-gray-500 text-gray-100 hover:bg-gray-600': $route.path === route.path }"
        >{{ route.title }}</router-link
      >
    </nav>
  </div>
</template>

<style scoped>
.sidebar.-translate-x-full {
  transform: 100%;
}
</style>
