<script setup>
import MidCard from './MidCard.vue'
import { computed, ref, onMounted } from 'vue'
import Modal from './Modal.vue'
import { VueCal } from 'vue-cal'
import 'vue-cal/style'
import http from '@/services/requests'

let isModalOpen = ref(false)

function openModal() {
  isModalOpen.value = true
}

function handleClose() {
  isModalOpen.value = false
}

function getEvents() {
  http
    .get('/events/')
    .then((response) => {
      events.value = response.data.map((events) => {
        return {
          ...events,
          end: new Date(events.end_datetime),
          start: new Date(events.start_datetime),
        }
      })
    })
    .catch((error) => {
      console.log(error.response.data.detail)
      if (typeof error.response.data.detail === 'string') {
        toast(error.response.data.detail, {
          theme: 'dark',
          type: 'error',
        })
      } else {
        toast('Ha ocurrido un error, contacte soporte !!', {
          theme: 'dark',
          type: 'error',
        })
      }
    })
}

function getEmoji(emoji) {
  if (emoji == 'e-musica') return '🎶'
  if (emoji == 'e-oracion') return '🛐'
  if (emoji == 'e-comida') return '🍛'
  if (emoji == 'e-reunion') return '⛪'

  return 'celebration'
}
onMounted(() => {
  getEvents()
})
//calendario
const events = ref([])

//Visible en la tarjeta

const colors = ref([
  'from-primary to-deep-blue',
  'from-deep-blue to-blue-400',
  'from-primary/80 to-primary',
  'from-gray-700 to-black opacity-90',
])

const filterList = computed(() => {
  let fechaActual = new Date()
  fechaActual.setHours(0, 0, 0, 0)

  return events.value
    .map((f) => ({ ...f, auxDate: new Date(f.start) }))
    .sort((a, b) => a.auxDate - b.auxDate)
    .filter((f) => f.auxDate >= fechaActual)
    .slice(0, 4)
})
</script>

<template>
  <section class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="event">
    <div class="flex items-center justify-between mb-12">
      <div>
        <h2 class="text-deep-blue dark:text-white text-4xl font-bold mb-2">Próximos Eventos</h2>
        <p class="text-gray-500 dark:text-gray-400">
          Mantente conectado con nuestras actividades semanales.
        </p>
      </div>
      <button
        @click="openModal"
        class="bg-gray-100 dark:bg-gray-800 text-deep-blue dark:text-white px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all cursor-pointer"
      >
        Ver calendario completo
      </button>
    </div>
    <div>
      class="w-full flex justify-center items-center text-deep-blue dark:text-white uppercase
      bg-white/30 dark:bg-white/5 pt-20 rounded-2xl shadow-xl" v-if="filterList.length == 0" >
      <h2 class="text-deep-blue dark:text-white text-4xl font-bold mb-2">
        Estamos preparando los proximos grandes momentos .¡Vuelve pronto.!
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <mid-card
        v-for="(event, index) in filterList"
        :key="event.title"
        :event="event.title"
        :icon="getEmoji(event.icon)"
        :location="event.location"
        :tag="event.tag"
        :date="
          event.start
            .toLocaleString('es-Es', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })
            .toLocaleUpperCase()
        "
        :colors="colors[index]"
      />
    </div>
  </section>
  <modal :show="isModalOpen" title="Eventos" size="w-3xl" @close="handleClose">
    <div class="flex flex-col overflow-hidden">
      <div class="relative">
        <vue-cal
          v-model:events="events"
          :editable-events="false"
          view="days"
          :views="{ day: '', days: { cols: 5, rows: 1 }, month: '', year: '', years: '' }"
          locale="es"
          :time-from="7 * 60"
          :time-to="18 * 60"
          :time-step="30"
          dark
          sm
          class="text-center"
        />
      </div>
    </div>
  </modal>
</template>

<style scoped>
.vuecal {
  --vuecal-primary-color: #9b263e;
}
</style>
