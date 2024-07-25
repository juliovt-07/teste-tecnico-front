<script setup>
import { defineProps, defineEmits } from "vue";
import TextInput from "./TextInput.vue";

const props = defineProps({
  modelValue: String,
  error: String,
  validate: Function,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
<template>
  <TextInput
    id="email"
    name="email"
    type="email"
    label="Email address"
    :modelValue="props.modelValue"
    :error="props.error"
    :validate="props.validate"
    placeholder="Email address"
    autocomplete="email"
    @input="updateValue"
  />
</template>
