<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  id: String,
  name: String,
  type: {
    type: String,
    default: "text",
  },
  label: String,
  modelValue: String,
  error: String,
  placeholder: String,
  autocomplete: {
    type: String,
    default: "",
  },
  validate: Function,
  containerClass: {
    type: String,
    default: "sm:col-span-3",
  },
  inputClass: {
    type: String,
    default:
      "block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset placeholder:text-gray-400 outline-none focus:ring-gray-600 sm:text-sm sm:leading-6",
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div :class="props.containerClass">
    <label :for="props.id" class="block text-sm font-medium leading-6 text-gray-900">
      {{ props.label }}
    </label>
    <div class="mt-2">
      <span class="error" v-if="props.error">{{ props.error }}</span>
      <input
        :type="props.type"
        :id="props.id"
        :name="props.name"
        :value="props.modelValue"
        @input="updateValue"
        @blur="props.validate"
        :class="props.inputClass"
        :placeholder="props.placeholder"
        :autocomplete="props.autocomplete"
      />
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
</style>
