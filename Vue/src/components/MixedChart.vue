<script setup>
import { ref, defineProps, watchEffect } from 'vue'

const props = defineProps({
  moedas: {
    type: Array
  }
})

const series = ref([])

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
    categories: [0, 0, 0, 0]
    // categories: props.moedas.value.map((item, index) => `Data ${index + 1}`)
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

const updateChart = () => {
  if (!props.moedas || props.moedas.length === 0) {
    return
  }

//   const categories = props.moedas.map((item, index) => `Data ${index + 1}`)
//   const highData = props.moedas.map((item) => parseFloat(item.high))
//   const lowData = props.moedas.map((item) => parseFloat(item.low))

//   chartOptions.value.xaxis.categories = categories
  series.value = [
    {
      name: 'High',
      type: 'column',
      data: [3, 3, 9, 1]
    },
    {
      name: 'Low',
      type: 'column',
      data: [6, 4, 5, 2]
    }
  ]
}

// Use watchEffect instead of watch to ensure it runs immediately with the initial value
watchEffect(() => {
  updateChart()
})
</script>

<template>
  <div class="flex flex-col items-center">
    <apexchart
      type="line"
      height="300"
      width="400"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
