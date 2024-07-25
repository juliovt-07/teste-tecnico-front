<script setup>
import { ref, onMounted } from 'vue'
import VCard from '@/components/VCard.vue'
import BarChart from '@/components/BarChart.vue'
import MixedChart from '@/components/MixedChart.vue'
import economiaService from '@/services/economiaService'

const moedas = ref([])

const fetchMoedas = async () => {
  // loading.value = true
  moedas.value = ref([])
  await economiaService
    .getLastDays(4)
    .then((response) => {
      moedas.value = response.data
    })
    .catch((error) => {
      console.error('Erro ao buscar moedas:', error)
    })
  // loading.value = false
}

onMounted(async () => {
  await fetchMoedas()
})
</script>

<template>
  <VCard>
    <h1 class="capitalize col-span-12 text-left mb-5 text-3xl font-bold text-gray-700">
      info users
    </h1>
    <div class="flex flex-col items-center">
      <MixedChart :moedas="moedas"/>
      <BarChart />
    </div>
  </VCard>
</template>