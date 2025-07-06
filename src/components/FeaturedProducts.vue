<script setup>
import { useAssets } from '../composables/index';
import { featuredProductsConfig as carouselConfig } from '../config/carouselConfig';
import { featuredProducts as products } from '../mocks/products';
import { RouterLink } from 'vue-router';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/carousel.css';
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
