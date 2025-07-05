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
  <footer class="bg-slate-100 px-4 md:px-12 xl:px-28 2xl:px-48 pb-6 md:pb-8">
    <div class="grid grid-cols-2 md:grid-cols-4 font-medium py-6 xl:py-8 gap-y-8">
      <div class="flex flex-row md:justify-center items-center py-1 md:py-2 pr-4 border-r border-gray-300 text-gray-800">
        <FontAwesomeIcon class="text-lg mr-3" :icon="faComputer" />
        <h6 class="text-xs lg:text-sm">Great variety of products</h6>
      </div>
      <div class="flex flex-row md:justify-center items-center py-1 md:py-2 px-4 border-r-none md:border-r border-gray-300 text-gray-800">
        <FontAwesomeIcon class="mr-3" :icon="faTruck" />
        <h6 class="text-xs lg:text-sm">Free delivery for order over $70</h6>
      </div>
      <div class="flex flex-row md:justify-center items-center py-1 md:py-2 pr-4 md:px-4 border-r border-gray-300 text-gray-800">
        <FontAwesomeIcon class="text-lg mr-3" :icon="faPercent" />
        <h6 class="text-xs lg:text-sm">Daily mega discounts</h6>
      </div>
      <div class="flex flex-row md:justify-center items-center py-1 md:py-2 pl-4 text-gray-800">
        <FontAwesomeIcon class="mr-3" :icon="faSackDollar" />
        <h6 class="text-xs lg:text-sm">Best price on the market</h6>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 pt-6 md:pt-8 border-t border-t-gray-300 text-gray-800">
      <p class="text-sm text-center lg:text-left mb-4 lg:mb-0">Desarrollado por Romario Sarmiento</p>
      <ul class="flex flex-row gap-4 justify-center lg:justify-end">
        <li v-for="(link, key) in navLinks" :key="key">
          <RouterLink class="text-sm hover:underline" :to="link.path">{{link.name}}</RouterLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>

</style>
