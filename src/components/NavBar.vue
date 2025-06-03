<script setup>
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <nav class="px-48 py-6 border-b border-b-gray-200">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-3xl font-black">TECH STORE</h1>
      <div>
        <ul class="flex flex-row gap-8">
          <li>
            <RouterLink to="/login">
              <div class="w-10 h-10 flex justify-center items-center rounded-full border border-gray-200">
                <FontAwesomeIcon size="md" :icon="faUser" />
              </div>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/cart">
              <div class="w-10 h-10 flex justify-center items-center rounded-full border border-gray-200">
                <FontAwesomeIcon size="md" :icon="faShoppingCart" />
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center mt-4">
      <button class="bg-[#2bbef9] text-white rounded-4xl py-3 px-6 font-semibold">CATEGORIES</button>
      <div>
        <ul class="flex flex-row gap-8">
          <li>
            <RouterLink class="font-medium" to="/">HOME</RouterLink>
          </li>
          <li>
            <RouterLink class="font-medium" to="/about">ABOUT</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
