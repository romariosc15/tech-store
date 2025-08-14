<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import MainFooter from './components/MainFooter.vue';
import NotificationMessage from './components/NotificationMessage.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
  <MainFooter />
  <NotificationMessage />
</template>

<style scoped>

</style>
