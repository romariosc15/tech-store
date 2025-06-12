<script setup>
import { useAssets } from '../composables/index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMinus, faPlus, faTruck, faRankingStar, faSackDollar } from '@fortawesome/free-solid-svg-icons';
const product = {
  id: 6,
  sku: 'ABC1001',
  image: 'consola-ps5.png',
  name: 'Consola de PlayStation 5',
  description: 'Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent',
  brand: 'Sony',
  category: 'Consola de videojuegos',
  tags: ['ps5', 'consola', 'gaming', 'juegos'],
  price: 2199.99,
}
</script>

<template>
  <main>
    <div class="px-48 mt-12 mb-16">
      <div class="bg-slate-100 p-12 rounded-lg">
        <h5 class="text-2xl font-bold text-gray-800 mb-2">{{ product.name }}</h5>
        <div class="flex flex-row">
          <p class="text-sm pr-4 border-r border-gray-300">
            <span class="text-gray-500 mr-2">Brand:</span>
            <span class="text-gray-700 font-medium">{{ product.brand }}</span>
          </p>
          <p class="text-sm pl-4">
            <span class="text-gray-500 mr-2">SKU:</span>
            <span class="text-gray-700 font-medium">{{ product.sku }}</span>
          </p>
        </div>
        <div class="grid grid-cols-3 gap-12">
          <img class="w-full h-[350px] object-cover px-2 py-4" :src="useAssets(`/src/assets/images/products/${product.image}`)" alt="">
          <div class="">
            <span class="text-2xl font-bold text-red-600 tracking-wide">S/. {{ product.price }}</span>
            <div class="mt-2">
              <span class="bg-green-200 text-green-600 py-1.5 px-3 rounded-full text-xs font-medium">EN STOCK</span>
            </div>
            <p class="text-sm text-gray-800 mt-4 tracking-wide">{{ product.description }}</p>
            <div class="flex flex-row justify-between border-b border-gray-300 mt-4 pb-6 items-center">
              <div class="space-x-4">
                <button class="bg-gray-200 transition-colors hover:bg-yellow-300 w-10 h-10 rounded-full cursor-pointer">
                  <FontAwesomeIcon size="xs" :icon="faMinus" />
                </button>
                <span>1</span>
                <button class="bg-gray-200 transition-colors hover:bg-yellow-300 w-10 h-10 rounded-full cursor-pointer">
                  <FontAwesomeIcon size="xs" :icon="faPlus" />
                </button>
              </div>
              <button class="inline-block bg-blue-900 transition-opacity hover:opacity-80 text-white text-sm font-medium rounded-4xl py-3 px-8 cursor-pointer">
                Add to cart
              </button>
            </div>
            <div class="mt-6 space-y-2 text-xs">
              <p>
                <span class="text-gray-400 mr-2">Category:</span>
                <span class="font-medium text-gray-600">{{ product.category }}</span>
              </p>
              <p>
                <span class="text-gray-400 mr-2">Tags:</span>
                <span class="font-medium text-gray-600">{{ product.sku }}</span>
              </p>
            </div>
          </div>
          <div>
            <div class="bg-white text-gray-800 rounded-lg p-8 space-y-4">
              <div class="flex flex-row items-center gap-4">
                <FontAwesomeIcon :icon="faTruck" />
                <h6 class="text-xs">Free Shipping apply to all orders over $299</h6>
              </div>
              <div class="flex flex-row items-center gap-4">
                <FontAwesomeIcon :icon="faRankingStar" />
                <h6 class="text-xs">The highest quality in the market</h6>
              </div>
              <div class="flex flex-row items-center gap-5">
                <FontAwesomeIcon :icon="faSackDollar" />
                <h6 class="text-xs">1-day return policy in case you change your mind</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  
</style>