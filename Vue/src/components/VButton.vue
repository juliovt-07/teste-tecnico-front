  <script setup>
  import { computed } from 'vue'

  const props = defineProps({
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'default', // 'default' | 'primary' | 'secondary'
    },
  })

  const buttonClass = computed(() => {
    let baseClasses = 'flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm'

    if (props.disabled) {
      baseClasses += ' bg-gray-400 text-gray-600 cursor-not-allowed'
    } else {
      switch (props.variant) {
        case 'primary':
          baseClasses += ' bg-gray-700 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          break
        case 'secondary':
          baseClasses += ' bg-gray-200 text-gray-700 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400'
          break
        default:
          baseClasses += ' bg-gray-700 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          break
      }
    }

    return baseClasses
  })

  const handleClick = (event) => {
    if (props.disabled) {
      event.preventDefault()
    }
  }
</script>
  
  <template>
    <button :type="type" :class="buttonClass" :disabled="disabled" @click="handleClick">
      <slot></slot>
    </button>
  </template>
