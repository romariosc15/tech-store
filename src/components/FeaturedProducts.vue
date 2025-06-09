<script setup>
import { useAssets } from '../composables/index'
const products = [
    {
        image: 'consola-ps5.png',
        name: 'Consola de PlayStation 5',
        brand: 'Sony',
        price: 2199.99,
    },
    {
        image: 'mando-ps5.png',
        name: 'Mando de PlayStation 5',
        brand: 'Sony',
        price: 299.99,
    },
    {
        image: 'consola-xbox-series.png',
        name: 'Consola de XBOX Series S',
        brand: 'Microsoft',
        price: 2399.99,
    },
    {
        image: 'mando-xbox-series.png',
        name: 'Mando de XBOX Series X - S',
        brand: 'Microsoft',
        price: 299.99,
    },
    {
        image: 'macbook-air-m4.png',
        name: 'MacBook Air M4 2025',
        brand: 'Apple',
        price: 4999.99,
    },
]
</script>

<template>
  <h5 class="text-lg font-semibold">PRODUCTOS DESTACADOS</h5>
  <p class="text-sm font-light text-gray-500">Productos mas vendidos durante el mes de Mayo.</p>
  <div class="grid grid-cols-5 mt-6">
    <div
        class="p-4 border-l border-t border-b border-gray-200"
        :class="products.length - 1 === key ? 'border-r' : ''"
        v-for="(product, key) in products"
        :key="key"
    >
        <img class="w-full h-[200px] object-cover px-2 py-4" :src="useAssets(`/src/assets/images/products/${product.image}`)" alt="">
        <span class="text-sm text-gray-500">{{ product.brand }}</span>
        <h6 class="text-base/5 font-medium mb-2 line-clamp-1">{{ product.name }}</h6>
        <span class="text-lg font-semibold text-red-600 tracking-tighter">S/. {{ product.price }}</span>
        <button class="w-full bg-yellow-300 rounded-3xl text-xs px-4 py-2 mt-4 cursor-pointer">Agregar al carrito</button>
    </div>
  </div>
</template>

<style scoped>

</style>
