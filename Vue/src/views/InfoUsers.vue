<script setup>
import { ref, defineAsyncComponent } from 'vue'
import VCard from '@/components/VCard.vue'
import BarChart from '@/components/BarChart.vue'
import MixedChart from '@/components/MixedChart.vue';
import economiaService from '@/services/economiaService';
import LoadingCard from '@/components/LoadingCard.vue';

const moedas = ref([])
const loading = ref(false)

const fetchMoedas = async () => {
  loading.value = true
  moedas.value = ref([])
  await economiaService
    .getLastDays(4)
    .then((response) => {
      moedas.value = response.data
    })
    .catch((error) => {
      console.error('Erro ao buscar moedas:', error)
    })

  loading.value = false
}

const Chart = defineAsyncComponent(async () => {
  await fetchMoedas()
  return MixedChart
});

</script>

<template>
  <VCard>
    <h1 class="capitalize col-span-12 text-left mb-5 text-3xl font-bold text-gray-700">
      info users
    </h1>
    <div class="flex flex-col items-center">
      <LoadingCard v-if="loading" />
      <Chart :moedas="moedas"/>
      <BarChart />
    </div>
  </VCard>
</template>