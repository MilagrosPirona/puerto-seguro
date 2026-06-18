<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import Hero from '../components/Hero.vue'
import CardSection from '../components/CardSection.vue'
import MissionSection from '../components/MissionSection.vue'
import DonationSection from '../components/DonationSection.vue'
import EventSection from '../components/EventSection.vue'
import FooterSection from '../components/FooterSection.vue'
import Menu from '../components/Menu.vue'
</script>

<template>
  <header-nav />
  <main>
    <Hero />
    <card-section />
    <mission-section />
    <donation-section />
    <event-section />
  </main>
  <footer-section />
  <Menu />
</template>

<style scoped></style>
