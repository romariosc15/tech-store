<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faShoppingCart, faBars, faChevronDown, faHouse, faShop, faBuilding, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
const navLinks = [
  {name: 'HOME', path: '/', icon: faHouse},
  {name: 'SHOP', path: '/products', icon: faShop},
  {name: 'ABOUT', path: '/about', icon: faBuilding},
  {name: 'CONTACT', path: '/contact', icon: faPhoneVolume},
];
let isCategoriesDropdownVisible = ref(false);
const onShowCategories = () => {
  isCategoriesDropdownVisible.value = !isCategoriesDropdownVisible.value;
};
</script>

<template>
  <nav class="px-48 pt-6 pb-4 border-b border-b-gray-200">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-4xl text-blue-900 font-black">TECH STORE</h1>
      <input class="bg-gray-100 text-sm w-[500px] h-12 px-6 rounded-md" type="text" placeholder="Search products ...">
      <div>
        <ul class="flex flex-row gap-4 text-gray-600">
          <li>
            <RouterLink to="/login">
              <div class="w-10 h-10 transition-colors flex justify-center items-center rounded-full border border-gray-200 hover:bg-blue-900 hover:text-white">
                <FontAwesomeIcon class="text-sm" :icon="faUser" />
              </div>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/cart">
              <div class="w-10 h-10 transition-colors flex justify-center items-center rounded-full border border-gray-200 hover:bg-blue-900 hover:text-white">
                <FontAwesomeIcon class="text-sm" :icon="faShoppingCart" />
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center mt-4">
      <div class="relative">
        <button class="bg-sky-400 text-white text-sm rounded-4xl py-3 px-6 cursor-pointer" @click="onShowCategories">
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
              class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Category 1
            </RouterLink>
            <RouterLink
              to="#"
              class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Category 2
            </RouterLink>
            <RouterLink
              to="#"
              class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
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
          <li v-for="(link, key) in navLinks" :key="key">
            <RouterLink class="font-medium transition-colors hover:bg-sky-100 hover:text-sky-500 px-5 py-2.5 rounded-4xl" :to="link.path">
              <FontAwesomeIcon class="mr-2" :icon="link.icon" />
              <span class="text-sm">{{link.name}}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
