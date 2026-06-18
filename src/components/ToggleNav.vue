<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'

let show = ref(false)

function toggleMenu() {
  show.value = !show.value
}

onMounted(() => {
  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth
    if (currentWidth >= 768) show.value = false
  })
})
</script>

<template>
  <div class="toggle">
    <button @click="toggleMenu" class="md:hidden text-deep-blue dark:text-white cursor-pointer">
      <span class="material-symbols-outlined text-3xl">menu</span>
    </button>
    <ul v-if="show">
      <li>
        <span class="material-symbols-outlined text-xl!">home</span>
        <a href="#home">Inicio</a>
      </li>
      <li>
        <span class="material-symbols-outlined text-xl!">person</span>
        <a href="#cards">Nosotros</a>
      </li>
      <li>
        <span class="material-symbols-outlined text-xl!">article_shortcut</span>
        <a href="#event">Eventos</a>
      </li>
      <li>
        <span class="material-symbols-outlined text-xl!">info</span>
        <a href="#donaciones">Donaciones</a>
      </li>
      <li>
        <span class="material-symbols-outlined text-xl!">mail</span>
        <a href="#contact">Contacto</a>
      </li>
      <li>
        <span class="material-symbols-outlined text-xl!">settings</span>
        <a href="#servicios">Servicios</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.toggle {
  position: relative;
  width: fit-content;
}
ul {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #f0f2f5;
  border-radius: 8px;
  padding: 20px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 220px;
  overflow: hidden;
  transform-origin: top center;
  animation: scaleIn 0.15s ease-out forwards;
  z-index: 100;
}
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
li {
  list-style: none;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #050505;
  cursor: pointer;
  transition: all 0.2s ease;
}
li:hover {
  background-color: #e7f3ff;
  color: #1877f2;
}
li span {
  color: #65676b;
}
li:hover ispan {
  color: #1877f2;
}
</style>
