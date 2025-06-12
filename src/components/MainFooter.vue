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
  <footer class="bg-slate-100 px-48 pb-8">
    <div class="grid grid-cols-4 font-medium">
      <div class="flex flex-row my-8 py-2 border-r border-gray-300 text-gray-800">
        <FontAwesomeIcon class="text-lg mr-3" :icon="faComputer" />
        <h6 class="text-sm">Great variety of products</h6>
      </div>
      <div class="flex flex-row justify-center items-center my-8 py-2 border-r border-gray-300 text-gray-800">
        <FontAwesomeIcon class="mr-3" :icon="faTruck" />
        <h6 class="text-sm">Free delivery for order over $70</h6>
      </div>
      <div class="flex flex-row justify-center items-center my-8 py-2 border-r border-gray-300 text-gray-800">
        <FontAwesomeIcon class="text-lg mr-3" :icon="faPercent" />
        <h6 class="text-sm">Daily mega discounts</h6>
      </div>
      <div class="flex flex-row justify-center items-center my-8 py-2 text-gray-800">
        <FontAwesomeIcon class="mr-3" :icon="faSackDollar" />
        <h6 class="text-sm">Best price on the market</h6>
      </div>
    </div>
    <div class="grid grid-cols-2 pt-8 border-t border-t-gray-300 text-gray-800">
      <p class="text-sm">Desarrollado por Romario Sarmiento en el año 2025</p>
      <ul class="flex flex-row gap-4 justify-end">
        <li v-for="(link, key) in navLinks" :key="key">
          <RouterLink class="text-sm hover:underline" :to="link.path">{{link.name}}</RouterLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>

</style>
