<script setup>
import { ref } from 'vue'
import MobileMenu from '@/components/MobileMenu.vue'
import SideBar from '@/components/SideBar.vue'
import ModalUser from '@/components/ModalUser.vue'

const isSidebarVisible = ref(false)

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}
</script>

<template>
  <div class="app-container relative min-h-screen md:flex justify-between overflow-hidden">
    <ModalUser />
    <header>
      <MobileMenu @toggle-sidebar="toggleSidebar" />
    </header>
    <SideBar :isVisible="isSidebarVisible" />
    <div class="md:w-full mt-0 md:mt-0 z-20 md:pr-10 py-10">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 100vw;
}
</style>
