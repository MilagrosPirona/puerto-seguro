<script setup>
import SmallCard from './SmallCard.vue'
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 -mt-16 relative z-20" id="cards">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <small-card
        title="¿Eres Nuevo?"
        description="Queremos conocerte y acompañarte en tu camino de fe."
        icon="person_add"
      />
      <small-card
        title="Grupos Pequeños"
        description="Crece en comunidad a través de nuestros grupos de estudio."
        icon="groups"
      />
      <small-card
        title="Petición de Oración"
        description="No estás solo, nuestro equipo pastoral ora por ti."
        icon="volunteer_activism"
      />
    </div>
  </section>
</template>

<style></style>
