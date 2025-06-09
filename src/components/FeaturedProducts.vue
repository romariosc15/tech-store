<script setup>
import { useAssets } from '../composables/index';
import { RouterLink } from 'vue-router';
const products = [
    {
        id: 1,
        image: 'consola-ps5.png',
        name: 'Consola de PlayStation 5',
        brand: 'Sony',
        price: 2199.99,
    },
    {
        id: 2,
        image: 'mando-ps5.png',
        name: 'Mando de PlayStation 5',
        brand: 'Sony',
        price: 299.99,
    },
    {
        id: 3,
        image: 'consola-xbox-series.png',
        name: 'Consola de XBOX Series S',
        brand: 'Microsoft',
        price: 2399.99,
    },
    {
        id: 4,
        image: 'mando-xbox-series.png',
        name: 'Mando de XBOX Series X - S',
        brand: 'Microsoft',
        price: 299.99,
    },
    {
        id: 5,
        image: 'macbook-air-m4.png',
        name: 'MacBook Air M4 2025',
        brand: 'Apple',
        price: 4999.99,
    },
];
const getRoundedClasses = (currentIndex) => {
    const lastIndex = products.length - 1;
    let result = '';
    if(currentIndex === 0) result += 'rounded-bl-lg rounded-tl-lg';
    else if(lastIndex === currentIndex) result += 'border-r rounded-br-lg rounded-tr-lg';
    return result;
};
</script>

<template>
  <h5 class="text-lg font-semibold">PRODUCTOS DESTACADOS</h5>
  <p class="text-sm font-light text-gray-500">Productos mas vendidos durante el mes de Mayo.</p>
  <div class="grid grid-cols-5 mt-6">
    <div
        class="p-4 border-l border-t border-b border-gray-200"
        v-for="(product, key) in products"
        :class="getRoundedClasses(key)"
        :key="key"
    >
        <RouterLink :to="`/product/${product.id}`">
            <img class="w-full h-[200px] object-cover px-2 py-4" :src="useAssets(`/src/assets/images/products/${product.image}`)" alt="">
        </RouterLink>
        <span class="text-sm font-light text-gray-500">{{ product.brand }}</span>
        <h6 class="text-base/5 font-medium mb-2 line-clamp-1">{{ product.name }}</h6>
        <span class="text-lg font-semibold text-red-600 tracking-tighter">S/. {{ product.price }}</span>
        <button class="w-full bg-yellow-300 rounded-3xl text-xs font-medium px-4 py-2 mt-4 cursor-pointer">Agregar al carrito</button>
    </div>
  </div>
</template>

<style scoped>

</style>
