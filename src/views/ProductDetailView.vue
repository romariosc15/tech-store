<script setup>
import { useAssets } from '../composables/index';
import { RouterLink } from 'vue-router';
const product = {
  id: 6,
  sku: 'ABC1001',
  image: 'consola-ps5.png',
  name: 'Consola de PlayStation 5',
  description: 'Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent',
  brand: 'Sony',
  price: 2199.99, 
}
</script>

<template>
  <main>
    <div class="px-48 mt-12 mb-16">
      <div class="bg-slate-50 p-8 rounded-lg">
        <h5 class="text-xl font-semibold mb-2">{{ product.name }}</h5>
        <div class="flex flex-row">
          <p class="text-sm pr-4 border-r border-gray-300">
            <span class="text-gray-400 mr-2">Brand:</span>
            <span class="font-medium">{{ product.brand }}</span>
          </p>
          <p class="text-sm pl-4">
            <span class="text-gray-400 mr-2">SKU:</span>
            <span class="font-medium">{{ product.sku }}</span>
          </p>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <img class="w-full h-[350px] object-cover px-2 py-4" :src="useAssets(`/src/assets/images/products/${product.image}`)" alt="">
          <div>
            <span class="text-2xl font-semibold text-red-600 tracking-wide">S/. {{ product.price }}</span>
            <div class="mt-2">
              <span class="bg-green-200 text-green-600 py-1.5 px-3 rounded-full text-xs font-medium">EN STOCK</span>
            </div>
            <p class="text-sm text-gray-700 mt-4 tracking-wide">{{ product.description }}</p>
            <button class="inline-block bg-blue-900 text-white text-sm font-medium rounded-4xl py-2.5 px-5 mt-4 cursor-pointer">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  
</style>