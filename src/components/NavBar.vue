<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faShoppingCart, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
const navLinks = [
  {name: 'HOME', path: '/'},
  {name: 'SHOP', path: '/products'},
  {name: 'ABOUT', path: '/about'},
  {name: 'CONTACT', path: '/contact'},
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
      <div class="relative">
        <button class="bg-sky-400 text-white text-sm rounded-4xl py-3 px-6 cursor-pointer" @click="onShowCategories">
          <FontAwesomeIcon size="1x" :icon="faBars" />
          <span class="mx-4 font-semibold">CATEGORIES</span>
          <FontAwesomeIcon size="1x" :icon="faChevronDown" />
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
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Category 1
            </RouterLink>
            <RouterLink
              to="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Category 2
            </RouterLink>
            <RouterLink
              to="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
        <ul class="flex flex-row gap-1 text-gray-700">
          <li v-for="(link, key) in navLinks" :key="key">
            <RouterLink class="text-sm font-medium transition-colors hover:bg-sky-100 hover:text-sky-500 px-5 py-2.5 rounded-4xl" :to="link.path">
              {{link.name}}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
