<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
  <MainFooter />
</template>

<style scoped>

</style>
