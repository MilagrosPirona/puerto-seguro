<script setup>
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <button
    @click="toggleDarkMode"
    class="hidden lg:flex items-center w-18 h-8 bg-deep-blue px-1 rounded-full dark:bg-background-light hover:bg-deep-blue/90 transition-all cursor-pointer"
  >
    <div
      class="flex justify-center items-center flex-col relative rounded-full bg-background-light w-[40%] h-[75%] dark:bg-deep-blue transition-all translate-x-[10%] dark:translate-x-[150%] overflow-hidden"
    >
      <span
        class="material-symbols-outlined text-xl! absolute transition-all duration-500 ease dark:translate-y-[120%] translate-y-0"
        >sunny</span
      >
      <span
        class="material-symbols-outlined text-xl! absolute transition-all duration-500 ease translate-y-[-120%] dark:translate-y-0"
        >bedtime</span
      >
    </div>
  </button>
</template>

<style scoped></style>
