<script setup>
import { useAssets } from '../composables/index'
const products = [
    {
        image: 'product-1.jpg',
        name: 'Caramelos de frutos del bosque',
        brand: 'Kitty',
        price: 10.99,
    },
    {
        image: 'product-2.jpg',
        name: 'Platano de isla',
        brand: 'Kong',
        price: 10.99,
    },
    {
        image: 'product-3.jpg',
        name: 'Granos de café en bolsa descafeinado',
        brand: 'Herbi',
        price: 10.99,
    },
    {
        image: 'product-4.jpg',
        name: 'Uva verde',
        brand: 'Kitty',
        price: 10.99,
    },
    {
        image: 'product-5.jpg',
        name: 'Láminas de queso Mozzarella',
        brand: 'Singles',
        price: 10.99,
    },
]
</script>

<template>
  <h5 class="text-lg font-semibold">PRODUCTOS DESTACADOS</h5>
  <p class="text-sm font-light text-gray-500">Productos mas vendidos durante el mes de Mayo.</p>
  <div class="grid grid-cols-5 mt-6">
    <div class="p-4 border border-gray-200" v-for="(product, key) in products" :key="key">
        <img class="w-full px-2 py-4" :src="useAssets(`/src/assets/images/products/${product.image}`)" alt="">
        <span class="text-sm text-gray-500">{{ product.brand }}</span>
        <h6 class="text-base/5 font-medium mb-2 min-h-[2lh] line-clamp-2">{{ product.name }}</h6>
        <span class="text-lg font-semibold text-red-600 tracking-tighter">{{ product.price }}</span>
        <button class="w-full bg-yellow-300 rounded-3xl text-xs px-4 py-2 mt-4 cursor-pointer">Agregar al carrito</button>
    </div>
  </div>
</template>

<style scoped>

</style>
