<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faShoppingCart, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { navBarLinks } from '../mocks/navigation';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

const cartStore = useCartStore();
const { totalPrice, cart } = storeToRefs(cartStore);

let isCategoriesDropdownVisible = ref(false);
const onShowCategories = () => {
  isCategoriesDropdownVisible.value = !isCategoriesDropdownVisible.value;
};
</script>

<template>
  <nav class="px-4 md:px-12 xl:px-28 2xl:px-48 pt-6 pb-4 border-b border-b-gray-200">
    <div class="flex flex-row justify-between items-center">
      <RouterLink to="/">
        <img class="w-[125px]" src="/src/assets/images/logo.png" alt="Tech Store logo">
      </RouterLink>
      <input class="bg-gray-100 hidden lg:block text-sm w-[400px] xl:w-[500px] h-12 px-6 rounded-md" type="text" placeholder="Search products ...">
      <div>
        <ul class="flex flex-row items-center gap-4 text-gray-600">
          <li>
            <RouterLink to="/login">
              <div class="w-10 h-10 transition-colors flex justify-center items-center rounded-full border border-gray-200 hover:bg-blue-900 hover:text-white">
                <FontAwesomeIcon class="text-sm" :icon="faUser" />
              </div>
            </RouterLink>
          </li>
          <li>
            <span class="font-semibold">${{ totalPrice }}</span>
          </li>
          <li>
            <RouterLink to="/cart">
              <div class="relative w-10 h-10 transition-colors flex justify-center items-center rounded-full border border-gray-200 hover:bg-blue-900 hover:text-white">
                <FontAwesomeIcon class="text-sm" :icon="faShoppingCart" />
                <span class="absolute top-0 -right-[12px] rounded-full text-xs w-5 h-5 flex items-center justify-center bg-red-400 text-white">{{ cart.length }}</span>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="hidden lg:flex flex-row justify-between items-center mt-4">
      <div class="relative">
        <button class="bg-sky-400 text-white text-sm rounded-4xl py-3 px-6 cursor-pointer transition-opacity hover:opacity-80" @click="onShowCategories">
          <FontAwesomeIcon :icon="faBars" />
          <span class="mx-4 font-semibold">CATEGORIES</span>
          <FontAwesomeIcon :icon="faChevronDown" />
        </button>
        <div 
          class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
          :class="isCategoriesDropdownVisible ? 'block' : 'hidden'"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <RouterLink
              to="#"
              class="block px-4 py-2 text-sm transition-colors text-gray-600 hover:bg-sky-100 hover:text-sky-500"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Category 1
            </RouterLink>
            <RouterLink
              to="#"
              class="block px-4 py-2 text-sm transition-colors text-gray-600 hover:bg-sky-100 hover:text-sky-500"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Category 2
            </RouterLink>
            <RouterLink
              to="#"
              class="block px-4 py-2 text-sm transition-colors text-gray-600 hover:bg-sky-100 hover:text-sky-500"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Category 3
            </RouterLink>
          </div>
        </div>
      </div>
      <div>
        <ul class="flex flex-row gap-1 text-gray-600">
          <li v-for="(link, key) in navBarLinks" :key="key">
            <RouterLink class="font-medium uppercase transition-colors hover:bg-sky-100 hover:text-sky-500 px-5 py-2.5 rounded-4xl" :to="link.path">
              <FontAwesomeIcon class="mr-2" :icon="link.icon" />
              <span class="text-sm">{{link.name}}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
