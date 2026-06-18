<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl flex items-center gap-6 group hover:-translate-y-1 transition-transform"
  >
    <div
      class="w-16 h-16 rounded-full bg-primary/10 text-secondary flex items-center justify-center shrink-0"
    >
      <span class="material-symbols-outlined text-3xl!">{{ icon }}</span>
    </div>
    <div>
      <h3 class="text-xl font-bold text-deep-blue dark:text-white mb-1">{{ title }}</h3>
      <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style></style>
