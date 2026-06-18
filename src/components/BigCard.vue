<script setup>
import Modal from './Modal.vue'
import { ref } from 'vue'
const props = defineProps({
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

  bank: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  cedula: {
    type: String,
    required: true,
  },
})

const isModalOpen = ref(false)
function openModal() {
  isModalOpen.value = true
}
function handleClose() {
  isModalOpen.value = false
}

function copy() {
  navigator.clipboard.writeText(
    `${props.bank}\n${props.phone}\n${props.cedula}\nConcepto: ${props.title}`,
  )
}
</script>

<template>
  <div
    class="bg-background-light dark:bg-background-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center"
  >
    <div
      class="w-20 h-20 rounded-2xl bg-primary/10 text-secondary flex items-center justify-center mb-6"
    >
      <span class="material-symbols-outlined text-4xl!">{{ icon }}</span>
    </div>
    <h3 class="text-2xl font-bold text-deep-blue dark:text-white mb-3">{{ title }}</h3>
    <p class="text-gray-500 dark:text-gray-400 mb-8 grow">
      {{ description }}
    </p>
    <button
      @click="openModal"
      class="w-full py-4 bg-primary text-background-dark font-bold rounded-xl hover:scale-[1.02] transition-transform cursor-pointer"
    >
      Donar Ahora
    </button>
  </div>
  <modal :show="isModalOpen" :title="title" @close="handleClose">
    <div class="w-full flex justify-center items-center">
      <div
        class="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full md:w-auto min-w-[320px] border border-white/20"
      >
        <div class="space-y-4">
          <div>
            <p class="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Banco</p>
            <p class="text-lg font-semibold">{{ bank }}</p>
          </div>
          <div>
            <p class="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">
              CBU / Número de Telefono
            </p>
            <p class="text-lg font-semibold">{{ phone }}</p>
          </div>
          <div>
            <p class="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">
              Numero de Cedula
            </p>
            <p class="text-lg font-semibold">{{ cedula }}</p>
          </div>

          <div class="pt-2">
            <button
              @click="copy"
              class="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer active:scale-95 transition-all"
            >
              <span class="material-symbols-outlined text-sm!">content_copy</span>
              Copiar información de cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<style></style>
