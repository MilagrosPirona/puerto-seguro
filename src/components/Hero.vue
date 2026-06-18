<script setup></script>

<template>
  <section class="relative h-150 flex items-center overflow-hidden" id="home">
    <div class="absolute inset-0 z-0">
      <img
        alt="Congregación Puerto Seguro"
        class="w-full h-full object-cover"
        src="@/assets/church.png"
      />
      <div
        class="absolute inset-0 bg-linear-to-r from-deep-blue/90 via-deep-blue/60 to-transparent"
      ></div>
    </div>
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="max-w-2xl">
        <h2 class="text-white text-5xl md:text-6xl font-bold mb-6">
          Encuentra tu lugar en Puerto Seguro
        </h2>
        <p class="text-primary text-xl italic font-medium mb-8 border-l-4 border-primary pl-6">
          "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones." <br />
          <span class="text-sm not-italic opacity-80">— Salmos 46:1</span>
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="#event"
            class="bg-primary hover:bg-primary/90 text-background-dark px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center gap-2 cursor-pointer"
          >
            <span class="material-symbols-outlined">calendar_today</span>
            Visítanos este Domingo
          </a>
          <a
            href="#donaciones"
            class="bg-info/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all cursor-pointer"
          >
            Donaciones
          </a>
        </div>
        <p class="text-white/70 text-sm mt-6 flex items-center gap-2">
          <span class="material-symbols-outlined text-primary text-sm!">location_on</span>
          10:00 AM &amp; 12:00 PM • Av. Esperanza 123
        </p>
      </div>
    </div>
  </section>
</template>

<style></style>
