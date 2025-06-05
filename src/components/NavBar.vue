<script setup>
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faShoppingCart, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'
const navLinks = [
  {name: 'HOME', path: '/'},
  {name: 'SHOP', path: '/shop'},
  {name: 'ABOUT', path: '/about'},
  {name: 'CONTACT', path: '/contact'},
]
</script>

<template>
  <nav class="px-48 pt-6 pb-4 border-b border-b-gray-200">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-4xl text-blue-900 font-black">TECH STORE</h1>
      <input class="bg-gray-100 w-[500px] h-10 px-6 rounded-md" type="text" placeholder="Search products ...">
      <div>
        <ul class="flex flex-row gap-4 text-gray-700">
          <li>
            <RouterLink to="/login">
              <div class="w-10 h-10 transition-colors flex justify-center items-center rounded-full border border-gray-200 hover:bg-blue-900 hover:text-white">
                <FontAwesomeIcon size="1x" :icon="faUser" />
              </div>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/cart">
              <div class="w-10 h-10 transition-colors flex justify-center items-center rounded-full border border-gray-200 hover:bg-blue-900 hover:text-white">
                <FontAwesomeIcon size="1x" :icon="faShoppingCart" />
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center mt-4">
      <button class="bg-sky-400 text-white text-sm rounded-4xl py-3 px-6 cursor-pointer">
        <FontAwesomeIcon size="1x" :icon="faBars" />
        <span class="mx-4 font-semibold">CATEGORIES</span>
        <FontAwesomeIcon size="1x" :icon="faChevronDown" />
      </button>
      <div>
        <ul class="flex flex-row gap-1 text-gray-700 text-sm">
          <li v-for="(link, key) in navLinks" :key="key">
            <RouterLink class="font-medium transition-colors hover:bg-sky-100 hover:text-sky-500 px-5 py-2.5 rounded-4xl" :to="link.path">{{link.name}}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
