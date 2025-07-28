<script setup>
import ProductCard from '../components/ProductCard.vue';
import { featuredProductsConfig as carouselConfig } from '../config/carouselConfig';
import { featuredProducts as products } from '../mocks/products';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/carousel.css';
</script>

<template>
  <h5 class="text-lg font-semibold">PRODUCTOS DESTACADOS</h5>
  <p class="text-sm font-light text-gray-500">Productos mas vendidos durante el mes de Mayo.</p>
  <Carousel class="mt-6" v-bind="carouselConfig">
    <Slide class="border-t border-l border-b border-gray-200" v-for="product in products" :key="product.id">
      <ProductCard
        :product-data="product"
      />
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped>

</style>
