<script setup>
import ModeButton from './ModeButton.vue'
import ToggleNav from './ToggleNav.vue'
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex items-center gap-3">
          <div class="text-primary material-symbols-outlined text-4xl!">
            <img src="@/assets/logo.png" alt="Puerto Seguro" class="w-10 h-10" />
          </div>
          <div>
            <h1
              class="text-deep-blue dark:text-white text-xl font-bold leading-tight tracking-tight"
            >
              Puerto Seguro
            </h1>
            <p class="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
              Iglesia Evangelica
            </p>
          </div>
        </div>
        <nav class="hidden md:flex items-center gap-8">
          <a
            class="text-deep-blue dark:text-white font-medium hover:text-primary transition-colors"
            href="#home"
            >Inicio</a
          >
          <a
            class="text-deep-blue dark:text-white font-medium hover:text-primary transition-colors"
            href="#cards"
            >Nosotros</a
          >
          <a
            class="text-deep-blue dark:text-white font-medium hover:text-primary transition-colors"
            href="#event"
            >Eventos</a
          >
          <a
            class="text-deep-blue dark:text-white font-medium hover:text-primary transition-colors"
            href="#"
            >Servicios</a
          >
          <a
            class="text-deep-blue dark:text-white font-medium hover:text-primary transition-colors"
            href="#donaciones"
            >Donaciones</a
          >
          <a
            class="text-deep-blue dark:text-white font-medium hover:text-primary transition-colors"
            href="#"
            >Contacto</a
          >
        </nav>
        <div class="flex items-center gap-4">
          <mode-button />
          <toggle-nav />
        </div>
      </div>
    </div>
  </header>
</template>

<style></style>
