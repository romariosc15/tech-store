<script setup>
import { useAssets } from '../composables/index';
import { RouterLink } from 'vue-router';
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
const carouselConfig = {
    height: '100%',
    itemsToShow: 1,
    gap: 0,
    wrapAround: true,
    breakpoints: {
        640: {
            itemsToShow: 2,
        },
        768: {
            itemsToShow: 2,
        },
        1024: {
            itemsToShow: 3,
        },
        1280: {
            itemsToShow: 4,
        },
        1536: {
            itemsToShow: 4,
        },
        1792: {
            itemsToShow: 5,
        },
    }
};
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
</script>

<template>
  <h5 class="text-lg font-semibold">PRODUCTOS DESTACADOS</h5>
  <p class="text-sm font-light text-gray-500">Productos mas vendidos durante el mes de Mayo.</p>
  <Carousel class="mt-6" v-bind="carouselConfig">
    <Slide v-for="product in products" :key="product.id">
        <div
            class="p-4 border rounded-lg border-gray-200"
        >
            <RouterLink :to="`/product/${product.id}`">
                <img class="w-[270px] md:w-[260px] lg:w-[250px] xl:w-[200px] 2xl:w-[230px] h-[250px] md:h-[230px] lg:h-[240px] xl:h-[200px] 2xl:h-[230px] object-cover px-2 py-4" :src="useAssets(`/src/assets/images/products/${product.image}`)" :alt="product.name">
            </RouterLink>
            <span class="text-sm text-gray-400">{{ product.brand }}</span>
            <h6 class="text-base/5 font-medium mb-2 line-clamp-1">{{ product.name }}</h6>
            <span class="text-lg font-semibold text-red-600 tracking-tighter">S/. {{ product.price }}</span>
            <button class="w-full bg-yellow-300 transition-opacity hover:opacity-80 rounded-3xl text-xs font-medium px-4 py-2 mt-4 cursor-pointer">Agregar al carrito</button>
        </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped>

</style>
