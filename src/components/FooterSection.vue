<script setup></script>

<template>
  <footer class="bg-deep-blue text-white pt-20 pb-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <div class="text-primary material-symbols-outlined text-4xl!">
              <img src="@/assets/logo.png" alt="Puerto Seguro" class="w-10 h-10" />
            </div>
            <h2 class="text-2xl font-bold">Puerto Seguro</h2>
          </div>
          <p class="text-white/60 leading-relaxed mb-6">
            Una iglesia comprometida con la verdad bíblica, el amor fraternal y el servicio a
            nuestra ciudad.
          </p>
          <div class="flex gap-4">
            <a
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              href="#"
            >
              <span class="material-symbols-outlined text-lg!">public</span>
            </a>
            <a
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              href="#"
            >
              <span class="material-symbols-outlined text-lg!">send</span>
            </a>
            <a
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              href="#"
            >
              <span class="material-symbols-outlined text-lg!">play_circle</span>
            </a>
          </div>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-6">Navegación</h4>
          <ul class="space-y-4 text-white/70">
            <li><a class="hover:text-primary transition-colors" href="#">Nosotros</a></li>
            <li><a class="hover:text-primary transition-colors" href="#">Nuestras Creencias</a></li>
            <li><a class="hover:text-primary transition-colors" href="#">Ministerios</a></li>
            <li><a class="hover:text-primary transition-colors" href="#">Recursos</a></li>
            <li><a class="hover:text-primary transition-colors" href="#">Privacidad</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-6">Contacto</h4>
          <ul class="space-y-4 text-white/70">
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary">location_on</span>
              <span>Av. Esperanza 123, <br />Ciudad de Esperanza, CP 4500</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">mail</span>
              <span>contacto@puertoseguro.org</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">call</span>
              <span>+123 456 7890</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-6">Horarios</h4>
          <div class="space-y-2 text-white/70">
            <div class="flex justify-between">
              <span>Domingo:</span>
              <span class="font-semibold text-white">10:00 &amp; 12:00</span>
            </div>
            <div class="flex justify-between border-b border-white/10 pb-2 mb-2">
              <span>Reunión General</span>
            </div>
            <div class="flex justify-between">
              <span>Jueves:</span>
              <span class="font-semibold text-white">19:30</span>
            </div>
            <div class="flex justify-between">
              <span>Estudio Bíblico</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-white/40 text-sm">
          © 2024 Iglesia Cristiana Puerto Seguro. Todos los derechos reservados.
        </p>
        <div class="flex items-center gap-2">
          <span class="text-white/40 text-xs">Desarrollado con</span>
          <span class="material-symbols-outlined text-primary text-sm!">favorite</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style></style>
