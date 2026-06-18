<script setup>
import { VueCal } from 'vue-cal'
import 'vue-cal/style'
import { h, ref } from 'vue'
import Modal from '@/components/Modal.vue'
import http from '@/services/requests'
import { onMounted } from 'vue'
import { create } from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const isOpen = ref(false)

//calendario
const events = ref([])

const newEvent = ref({
  title: '',
  icon: '',
  location: '',
  tag: '',
})

const auxCreatFn = ref(null)

function createEvent({ event, resolve }) {
  auxCreatFn.value = resolve
  newEvent.value = { ...newEvent.value, ...event }
  isOpen.value = true
}

function formatDate(fecha) {
  const año = fecha.getFullYear()
  const mes = String(fecha.getMonth() + 1).padStart(2, '0')
  const dia = String(fecha.getDate()).padStart(2, '0')
  const horas = String(fecha.getHours()).padStart(2, '0')
  const minutos = String(fecha.getMinutes()).padStart(2, '0')
  const segundos = String(fecha.getSeconds()).padStart(2, '0')

  return `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`
}

function saveEvent() {
  const event = {
    ...newEvent.value,
    user_id: parseInt(localStorage.getItem('user_id')),
    start_datetime: formatDate(newEvent.value.start),
    end_datetime: formatDate(newEvent.value.end),
  }
  http
    .post('/events', event)
    .then((response) => {
      auxCreatFn.value(newEvent.value)
      isOpen.value = false
      newEvent.value = {
        title: '',
        icon: '',
        location: '',
        tag: '',
      }
      toast('Evento Agregado!!', {
        theme: 'dark',
        type: 'success',
      })
      getEvents()
    })
    .catch((error) => {
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

function deleteEvent(event) {
  http
    .delete(`/events/${event.id}`)
    .then((response) => {
      toast('Evento Eliminado!!', {
        theme: 'dark',
        type: 'success',
      })
      getEvents()
      modalConfirm.value = false
    })
    .catch((error) => {
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

function handleClose() {
  isOpen.value = false
  auxCreatFn.value(false)
  newEvent.value = {
    title: '',
    icon: '',
    location: '',
    tag: '',
  }
}

function cancelEvent() {
  isOpen.value = false
  auxCreatFn.value(false)
  newEvent.value = {
    title: '',
    icon: '',
    location: '',
    tag: '',
  }
}

function getEvents() {
  http
    .get('/events')
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
const modalConfirm = ref(false)
const auxEvent = ref({})
function confirmDelete(event) {
  modalConfirm.value = true
  auxEvent.value = { ...event }
}

function handleCloseConfirm() {
  modalConfirm.value = false
  auxEvent.value = {}
}

const locations = ref([
  {
    label: 'Local',
    value: 'Local',
  },
  {
    label: 'Jiraquito',
    value: 'Jiraquito',
  },
  {
    label: 'Malecon',
    value: 'Malecon',
  },
])

const tags = ref([
  {
    label: 'Jovenes',
    value: 'Jovenes',
  },
  {
    label: 'Niños',
    value: 'Niños',
  },
  {
    label: 'Damas',
    value: 'Damas',
  },
  {
    label: 'Todos',
    value: 'Todos',
  },
])

const icons = ref([
  {
    label: 'Musica 🎶',
    value: 'e-musica',
  },
  {
    label: 'Oracion 🛐',
    value: 'e-oracion',
  },
  {
    label: 'Comida 🍛',
    value: 'e-comida',
  },
  {
    label: 'Reunion ⛪',
    value: 'e-reunion',
  },
])
onMounted(() => {
  getEvents()
})
</script>

<template>
  <div class="admin-view">
    <div class="calendario w-150 md:w-200">
      <vue-cal
        v-model:events="events"
        :editable-events="{ drag: false, resize: false, delete: false, create: true }"
        @event-create="createEvent"
        view="days"
        :views="{ day: '', days: { cols: 5, rows: 1 }, month: '', year: '', years: '' }"
        locale="es"
        :time-from="7 * 60"
        :time-to="18 * 60"
        :time-step="30"
        dark
        sm
        class="text-center"
      >
        <template #event="{ event }"
          ><div class="vuecal__event-details">
            <div class="vuecal__event-title">{{ event.title }}</div>
            <div class="vuecal__event-time">
              <!----><span class="vuecal__event-start">{{
                event.start.toLocaleTimeString().split(' ')[0]
              }}</span
              ><span class="vuecal__event-end"
                >&nbsp;-&nbsp;{{ event.end.toLocaleTimeString().split(' ')[0]
                }}<!----></span
              >
            </div>
          </div>
          <div class="vuecal__event-delete" @click="confirmDelete(event)">Delete</div></template
        >
      </vue-cal>
    </div>
  </div>

  <modal :show="isOpen" title="Agregar Eventos" @close="handleClose">
    <div
      class="flex gap-1 mb-5 mt-5 relative bg-white/10 p-5 flex-wrap justify-end transition-all duration-300 ease-in-out"
    >
      <input
        v-model="newEvent.title"
        type="text"
        placeholder="Titulo"
        class="w-[calc(30%-4px)] rounded-sm border border-[#324d67] bg-[#111a22] focus:border-primary focus:ring-1 focus:ring-primary h-10 pl-5 text-base transition-all"
      />

      <select
        v-model="newEvent.location"
        class="w-[calc(30%-4px)] rounded-sm border border-[#324d67] bg-[#111a22] focus:border-primary focus:ring-1 focus:ring-primary h-10 pl-5 text-base transition-all"
      >
        <option value="" disabled>Ubicacion</option>
        <option v-for="loc in locations" :key="loc.value" :value="loc.value">
          {{ loc.label }}
        </option>
      </select>

      <select
        v-model="newEvent.icon"
        class="w-[calc(20%-4px)] rounded-sm border border-[#324d67] bg-[#111a22] focus:border-primary focus:ring-1 focus:ring-primary h-10 pl-5 text-base transition-all"
      >
        <option value="" disabled>Icono</option>
        <option v-for="ico in icons" :key="ico.value" :value="ico.value">
          {{ ico.label }}
        </option>
      </select>

      <select
        v-model="newEvent.tag"
        class="w-[calc(20%-4px)] rounded-sm border border-[#324d67] bg-[#111a22] focus:border-primary focus:ring-1 focus:ring-primary h-10 pl-5 text-base transition-all"
      >
        <option value="" disabled>Etiqueta</option>
        <option v-for="tag in tags" :key="tag.value" :value="tag.value">
          {{ tag.label }}
        </option>
      </select>
      <div class="mt-2 flex gap-1">
        <button
          @click="cancelEvent"
          class="bg-info/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-3 py-1 rounded-sm font-bold text-lg transition-all cursor-pointer"
        >
          Cancelar
        </button>
        <button
          @click="saveEvent"
          class="bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded-sm font-bold text-lg shadow-xl transition-all flex items-center gap-2 cursor-pointer"
        >
          Guardar
        </button>
      </div>
    </div>
  </modal>
  <modal
    :show="modalConfirm"
    title="¿Seguro que desea borrar el evento?"
    @close="handleCloseConfirm"
  >
    <div class="flex flex-col items-center">
      <p class="text-white/50 text-sm">Se Borrara el evento registrado.</p>
      <div class="flex justify-center items-center gap-3 mt-2">
        <button
          class="bg-info/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-3 py-1 rounded-sm font-bold text-lg transition-all cursor-pointer flex items-center gap-2"
          @click="handleCloseConfirm()"
        >
          <span class="material-symbols-outlined" data-icon="check_circle">cancel</span>
          No
        </button>
        <button
          class="bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded-sm font-bold text-lg shadow-xl transition-all flex items-center gap-2 cursor-pointer"
          @click="deleteEvent(auxEvent)"
        >
          <span class="material-symbols-outlined" data-icon="check_circle">check_circle</span>
          Si
        </button>
      </div>
    </div>
  </modal>
</template>

<style scoped>
.admin-view {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: url('@/assets/bgFaro.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.calendario {
  min-height: 200px;
  padding: 10px;

  background-color: black;
  background: transparent;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.vuecal {
  --vuecal-primary-color: #9b263e;
}
</style>
