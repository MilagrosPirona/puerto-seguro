<script setup>
defineProps({
  event: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  colors: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all"
  >
    <div class="h-48 relative overflow-hidden">
      <div
        class="absolute inset-0 bg-linear-to-br opacity-90 group-hover:scale-110 transition-transform duration-500"
        :class="colors"
      ></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="material-symbols-outlined text-5xl! text-white/50">{{ icon }}</span>
      </div>
    </div>
    <div class="p-6">
      <div class="flex items-center gap-2 mb-3">
        <span
          class="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider"
          >{{ tag }}</span
        >
      </div>
      <p class="text-xs font-bold text-primary mb-1">{{ date }}</p>
      <h3 class="font-bold text-xl text-deep-blue dark:text-white mb-2">{{ event }}</h3>
      <p class="text-sm text-gray-500 flex items-center gap-1">
        <span class="material-symbols-outlined text-sm!">location_on</span>
        {{ location }}
      </p>
    </div>
  </div>
</template>

<style></style>
