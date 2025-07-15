<script setup>
import { ref } from 'vue';
import MainBreadcrumb from '../components/MainBreadcrumb.vue';
import { useAssets } from '../composables/index';
import { RouterLink } from 'vue-router';
import { productList as products } from '../mocks/products';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();

const { addToCart } = cartStore;

const breadcrumbRoute = [
  { name: 'Home', url: '/home' },
  { name: 'Product list', url: '/products' },
];

let isLoading = ref(false);
const addProductToCart = (product) => {
  isLoading.value = true;
  addToCart({...product, quantity: 1});
  setTimeout(() => isLoading.value = false, 2000);
};

</script>

<template>
  <main>
    <div class="px-4 md:px-12 xl:px-28 2xl:px-48">
      <MainBreadcrumb :route="breadcrumbRoute" />
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 mb-24">
        <div class="space-y-8">
          <div>
            <h6 class="text-base font-semibold text-blue-950">CATEGORIES</h6>
            <ul class="text-gray-500 font-light space-y-2 mt-3">
              <li class="flex items-center">
                <input class="mr-2 cursor-pointer" type="checkbox" id="category-1">
                <label class="text-sm" for="category-1">Category 1</label>
              </li>
              <li class="flex items-center">
                <input class="mr-2 cursor-pointer" type="checkbox" id="category-2">
                <label class="text-sm" for="category-2">Category 2</label>
              </li>
              <li class="flex items-center">
                <input class="mr-2 cursor-pointer" type="checkbox" id="category-3">
                <label class="text-sm" for="category-3">Category 3</label>
              </li>
            </ul>
          </div>
          <div>
            <h6 class="text-base font-semibold text-blue-950">BRANDS</h6>
            <ul class="text-gray-500 font-light space-y-2 mt-3">
              <li class="flex items-center">
                <input class="mr-2 cursor-pointer" type="checkbox" id="brand-1">
                <label class="text-sm" for="brand-1">Sony</label>
              </li>
              <li class="flex items-center">
                <input class="mr-2 cursor-pointer" type="checkbox" id="brand-2">
                <label class="text-sm" for="brand-2">Apple</label>
              </li>
              <li class="flex items-center">
                <input class="mr-2 cursor-pointer" type="checkbox" id="brand-3">
                <label class="text-sm" for="brand-3">PlayStation</label>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:col-span-3">
          <div class="product-list-banner-1 w-full h-[250px] bg-center bg-no-repeat bg-cover rounded-lg flex justify-center items-center p-8 mb-4">
            <div>
              <h5 class="text-xl font-light text-blue-950">Los mejores precios en</h5>
              <h2 class="text-4xl font-bold text-blue-950">Tecnología</h2>
              <span class="text-sm font-light text-gray-500">Envíos disponibles a todo el país</span>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4">
            <div
              class="p-4 border -m-[0.5px] border-gray-200"
              v-for="product in products"
              :key="product.id"
            >
              <RouterLink :to="`/product/${product.id}`">
                <img class="w-full h-[200px] object-cover" :src="useAssets(`/src/assets/images/products/${product.image}`)" alt="">
              </RouterLink>
              <span class="text-sm font-light text-gray-500">{{ product.brand }}</span>
              <h6 class="text-base/5 font-medium mb-2 line-clamp-1">{{ product.name }}</h6>
              <span class="text-lg font-semibold text-red-600 tracking-tighter">S/. {{ product.price }}</span>
              <button
                :disabled="isLoading"
                @click="addProductToCart(product)"
                :class="isLoading ? 'cursor-not-allowed' : ''"
                class="w-full transition-colors border-sky-400 border bg-white text-sky-400 hover:bg-sky-400 hover:text-white rounded-3xl text-xs font-medium px-4 py-2 mt-4 cursor-pointer"
              >
                <FontAwesomeIcon v-if="isLoading" class="animate-spin" size="1x" :icon="faSpinner" />
                <span v-else>Agregar al carrito</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .product-list-banner-1 {
    background-image: url('../assets/images/product-list/banner-2.png');
  }
</style>