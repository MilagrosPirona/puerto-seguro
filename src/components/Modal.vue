<script setup>
import { watch } from 'vue'
const props = defineProps({
  show: {
    type: Boolean,
  },
  title: {
    type: String,
  },
  size: {
    type: String,
    default: '',
  },
})

const emit = defineEmits('close')

function closeModal() {
  emit('close')
}

watch(
  () => props.show,
  (newVal) => {
    document.body.style.overflow = newVal ? 'hidden' : 'auto'
  },
)
</script>

<template>
  <div
    v-show="show"
    class="fixed inset-0 bg-gray-900/60 flex items-center justify-center z-50 text-white"
  >
    <div
      class="bg-bg-modal p-6 rounded-lg shadow-2xl min-w-125 max-w-3xl max-h-160 overflow-auto m-4 flex flex-col relative"
      :class="size"
    >
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-4xl font-semibold m-auto">{{ title }}</h3>
        <button @click="closeModal" class="text-gray-500 hover:text-white cursor-pointer text-2xl">
          &times;
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script></script>
