<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  moedas: {
    type: Array
  }
})

const moedas = props.moedas

const series = ref([
  {
    name: 'High',
    type: 'column',
    data: props.moedas.map(m => m.high)
  },
  {
    name: 'Low',
    type: 'column',
    data: props.moedas.map(m => m.low)
  }
])

const chartOptions = ref({
  chart: {
    height: 350,
    type: 'line',
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [1, 1]
  },
  xaxis: {
    categories: moedas.map((item, index) => `Day ${index + 1}`) 
   },
  yaxis: [
    {
      seriesName: 'High',
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: '#008FFB'
      },
      labels: {
        style: {
          colors: '#008FFB'
        }
      },
      title: {
        text: 'High Value',
        style: {
          color: '#008FFB'
        }
      },
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'Low',
      opposite: true,
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: '#00E396'
      },
      labels: {
        style: {
          colors: '#00E396'
        }
      },
      title: {
        text: 'Low Value',
        style: {
          color: '#00E396'
        }
      }
    }
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft',
      offsetY: 30,
      offsetX: 60
    }
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40
  }
})

</script>

<template>
  <div class="flex flex-col items-center">
    <apexchart type="line" height="300" width="400" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
