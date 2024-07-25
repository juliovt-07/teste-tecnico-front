<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import reqresService from '@/services/reqresService'
import PaginationUsers from '@/components/PaginationUsers.vue'

const store = useStore();
const users = ref([])
const totalUsers = ref()
const perPage = ref()
const totalPages = ref()
const currentPage = ref()
const inputSearch = ref('')
const loading = ref(true)
const searchResult = computed(() => {
  return users.value.filter((user) =>
    user.first_name.toLowerCase().includes(inputSearch.value.toLowerCase())
  )
})

const openModal = (data) => {
  store.dispatch('openModal', data);
};

const fetchUsers = async (page) => {
  loading.value = true
  users.value = ref([])
  await reqresService
    .getUsers(page)
    .then((response) => {
      totalUsers.value = response.data.total
      totalPages.value = response.data.total_pages
      currentPage.value = response.data.page
      perPage.value = response.data.per_page
      users.value = response.data.data
    })
    .catch((error) => {
      console.error('Erro ao buscar usuários:', error)
    })
  loading.value = false
}

onMounted(async () => {
  await fetchUsers(1)
})
</script>

<template>
  <div class="flex flex-col min-h-96 list">
    <h1 class="capitalize col-span-12 text-left mb-5 text-3xl font-bold text-gray-700">
      users list
    </h1>
    <div v-if="loading" class="flex flex-col gap-7 mt-10">
      <div v-for="mock in 6" :key="mock" class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-slate-700 h-10 w-10"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-700 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
              <div class="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <form class="col-span-12 md:col-span-6" @submit.prevent>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:border-gray-500 max-w-xs"
            placeholder="Search user by name"
            required
            v-model.trim="inputSearch"
          />
        </div>
      </form>
      <h2
        class="col-span-12 text-gray-600 text-xl font-bold my-12"
        v-if="searchResult.length === 0"
      >
        No results found!
      </h2>
      <div class="col-span-12 grid grid-cols-12 gap-5 mt-12">
        <div
          v-for="(user, index) in searchResult"
          :key="index"
          @click="openModal(user.id)"
          class="col-span-12 md:col-span-6 lg:col-span-6 sm:flex flex-wrap bg-gray-100 text-gray-500 rounded-lg p-5 gap-5 border border-transparent shadow-sm cursor-pointer hover:shadow-lg hover:bg-gray-600 hover:text-gray-200"
        >
          <img
            :src="user.avatar"
            :alt="user.first_name"
            class="rounded-full w-20 h-20 object-cover"
          />
          <div class="text-left mt-3 sm:mt-0">
            <h2 class="text-lg font-semibold">{{ user.first_name }} {{ user.last_name }}</h2>
            <span class="block mb-4">{{ user.email }}</span>
            <ul class="flex flex-wrap gap-1 items-center">
              <li
                v-for="user in user.users"
                :key="user"
                class="rounded-full bg-white px-2 py-0.5 text-xs text-gray-500 border border-gray-300"
              >
                {{ user }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PaginationUsers
        v-if="users && inputSearch.length === 0"
        :total-users="totalUsers"
        :per-page="perPage"
        :page="currentPage"
        :total-pages="totalPages"
        @fetch-users="fetchUsers"
      />
    </div>
  </div>
</template>