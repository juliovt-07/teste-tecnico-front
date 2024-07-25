<script setup>
import { ref, computed } from 'vue'
import VCard from '@/components/VCard.vue'
import reqresService from '@/services/reqresService'

const loading = ref(false)
const user = ref('')

const form = {
  name: ref(''),
  email: ref('')
}

const errorCreate = ref({ title: '', description: '' })
const errorCard = ref(false)
const successCard = ref(false)

const errors = ref({})

const isNameValid = computed(() => form.name.value.trim() !== '')
const isEmailValid = computed(() => form.email.value.includes('@'))

const validateField = (field) => {
  if (field === 'name') {
    errors.value.name = isNameValid.value ? '' : 'Name is required.'
  }
  if (field === 'email') {
    errors.value.email = isEmailValid.value ? '' : 'Invalid email address.'
  }
}

const submitForm = () => {
  validateField('name')
  validateField('email')

  if (!errors.value.name && !errors.value.email) {
    console.log('Form submitted successfully!', form)
    createUser({ name: form.name.value, email: form.email.value })
  } else {
    console.log('Form has validation errors. Please correct them.')
  }
}

const createUser = async (data) => {
  loading.value = true
  await reqresService
    .createUser(data)
    .then((response) => {
      user.value = response.data.data
      successCard.value = true
      setTimeout(() => {
        successCard.value = false
      }, 5000)
      form.value = {
        name: ref(''),
        email: ref('')
      }
    })
    .catch((error) => {
      errorCreate.value.title = 'Erro ao criar usuário: '
      errorCreate.value.description = error
      errorCard.value = true
      setTimeout(() => {
        errorCard.value = false
      }, 5000)
    })
  loading.value = false
}

const closeErrorCard = () => {
  errorCard.value = false
}
</script>

<template>
  <VCard class="min-h-96 min-w-96">
    <div
      v-if="errorCard"
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong class="font-bold">{{ errorCreate.title }}</strong>
      <span class="block sm:inline">{{ errorCreate.description }}</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="closeErrorCard">
        <svg
          class="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
    </div>
    <div
      v-if="successCard"
      class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md absolute w-fit h-fit top-10"
      role="alert"
    >
      <div class="flex">
        <div class="py-1">
          <svg
            class="fill-current h-6 w-6 text-teal-500 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
            />
          </svg>
        </div>
        <div>
          <p class="font-bold">Usuário Criado com Sucesso</p>
          <p class="text-sm">Porém o Usuário não será listado pois a API usada não é real!</p>
        </div>
      </div>
    </div>
    <h1 class="capitalize col-span-12 text-left mb-5 text-3xl font-bold text-gray-700">
      create user
    </h1>
    <div v-if="loading">
      <div class="animate-pulse flex space-x-4 mt-7">
        <div class="flex-1 space-y-6 py-1">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-700 rounded"></div>
          <br />
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
    <div v-else>
      <form data-test="form" @submit.prevent="submitForm" class="text-gray-600">
        <div class="sm:col-span-3">
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div class="mt-2">
            <span class="error" v-if="errors.name && !isNameValid">{{ errors.name }}</span>
            <input
              type="text"
              data-test="new-user-name"
              v-model="form.name.value"
              @blur="validateField('name')"
              name="name"
              id="name"
              autocomplete="name"
              class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset placeholder:text-gray-400 outline-none focus:ring-gray-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-4 mt-6">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <span class="error" v-if="errors.email && !isEmailValid">{{ errors.email }}</span>
            <input
              id="email"
              data-test="new-user-job"
              v-model="form.email.value"
              @blur="validateField('email')"
              name="email"
              type="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset placeholder:text-gray-400 outline-none focus:ring-gray-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </form>
      <button
        @click="submitForm"
        class="btn flex flex-col items-center mt-8 w-36 text-gray-500 cursor-pointer"
        :disabled="loading"
      >
        Criar
      </button>
    </div>
    <span hidden data-test="user">{{ user }}</span>
  </VCard>
</template>

<style scoped>
.error {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
</style>
