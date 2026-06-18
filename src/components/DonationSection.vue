<script setup>
import BigCard from './BigCard.vue'
</script>

<template>
  <section class="py-24 bg-white dark:bg-white/5" id="donaciones">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-deep-blue dark:text-white text-4xl font-bold mb-4">
          Donaciones y Generosidad
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg">
          Tu generosidad nos permite seguir extendiendo el Reino de Dios y bendiciendo a nuestra
          comunidad local y global.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <big-card
          title="Diezmos"
          description="El diezmo es un acto de obediencia y gratitud, reconociendo la provisión de Dios en
            nuestras vidas."
          icon="savings"
          bank="Banco Mercantil"
          phone="00000000"
          cedula="1234567"
        />

        <big-card
          title="Ofrendas"
          description="Contribuciones voluntarias destinadas al sostenimiento de la iglesia y sus ministerios
            locales."
          icon="favorite"
          bank="Banco Mercantil"
          phone="111111111"
          cedula="12345678"
        />

        <big-card
          title="Misiones"
          description=" Apoya la propagación del mensaje de Cristo en lugares remotos y proyectos de ayuda
            humanitaria."
          icon="public"
          bank="Banco Mercantil"
          phone="22222222"
          cedula="123456789"
        />
      </div>
      <div
        class="bg-deep-blue rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div class="md:max-w-md">
          <h3 class="text-3xl font-bold mb-4">Transferencia Bancaria</h3>
          <p class="text-white/70 mb-6">
            También puedes realizar tu aporte directamente a través de nuestra cuenta bancaria
            oficial.
          </p>
          <div class="flex items-center gap-2 text-primary">
            <span class="material-symbols-outlined">verified</span>
            <span class="font-bold">Información de Seguridad Verificada</span>
          </div>
        </div>
        <div
          class="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full md:w-auto min-w-[320px] border border-white/20"
        >
          <div class="space-y-4">
            <div>
              <p class="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Banco</p>
              <p class="text-lg font-semibold">Banco Nacional de Esperanza</p>
            </div>
            <div>
              <p class="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">
                CBU / Número de Cuenta
              </p>
              <p class="text-lg font-semibold">0000000000000000000000</p>
            </div>
            <div>
              <p class="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Titular</p>
              <p class="text-lg font-semibold">Iglesia Puerto Seguro A.C.</p>
            </div>
            <div class="pt-2">
              <button class="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer">
                <span class="material-symbols-outlined text-sm!">content_copy</span>
                Copiar información de cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
