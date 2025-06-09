<script setup>
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faComputer, faTruck, faPercent, faSackDollar } from '@fortawesome/free-solid-svg-icons'
const navLinks = [
  {name: 'Home', path: '/'},
  {name: 'Shop', path: '/shop'},
  {name: 'About', path: '/about'},
  {name: 'Contact', path: '/contact'},
]
</script>
<template>
  <footer class="bg-slate-50 px-48 pb-8">
    <div class="grid grid-cols-4 text-center text-sm font-medium">
      <div class="my-8 py-2 border-r border-gray-200">
        <FontAwesomeIcon class="mr-2" size="lg" :icon="faComputer" />
        Great variety of products
      </div>
      <div class="my-8 py-2 border-r border-gray-200">
        <FontAwesomeIcon class="mr-2" size="lg" :icon="faTruck" />
        Free delivery for order over $70
      </div>
      <div class="my-8 py-2 border-r border-gray-200">
        <FontAwesomeIcon class="mr-2" size="lg" :icon="faPercent" />
        Daily mega discounts
      </div>
      <div class="my-8 py-2">
        <FontAwesomeIcon class="mr-2" size="lg" :icon="faSackDollar" />
        Best price on the market
      </div>
    </div>
    <div class="grid grid-cols-2 pt-8 border-t border-t-gray-200">
      <p class="text-sm font-light">Desarrollado por Romario Sarmiento en el año 2025</p>
      <ul class="flex flex-row gap-4 justify-end">
        <li v-for="(link, key) in navLinks" :key="key">
          <RouterLink class="text-sm font-light hover:underline" :to="link.path">{{link.name}}</RouterLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>

</style>
