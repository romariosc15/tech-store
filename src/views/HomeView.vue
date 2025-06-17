<script setup>
import FeaturedProducts from '../components/FeaturedProducts.vue';
</script>

<template>
  <main>
    <div class="px-48 mt-12 mb-16">
      <div class="grid grid-cols-2 gap-8 mb-8">
        <div class="home-banner-1 w-full h-[275px] bg-center rounded-lg flex justify-end items-center p-8">
          <div>
            <h4 class="text-2xl font-light text-blue-950">Descuento en</h4>
            <h2 class="text-4xl font-bold text-blue-950">Computadoras</h2>
            <span class="text-sm font-light text-gray-500">Descuento de fin de mes</span>
            <div class="mt-4">
              <a href="#" class="inline-block bg-blue-900 transition-opacity hover:opacity-80 text-white text-sm font-medium rounded-4xl py-2 px-4 cursor-pointer">
              Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="home-banner-2 w-full h-[275px] bg-center rounded-lg flex justify-end items-center p-8">
          <div>
            <h4 class="text-2xl font-light text-blue-950">Descuento en</h4>
            <h2 class="text-4xl font-bold text-blue-950">Playstation</h2>
            <span class="text-sm font-light text-gray-500">Descuento de fin de mes</span>
            <div class="mt-4">
              <a href="#" class="inline-block bg-blue-900 transition-opacity hover:opacity-80 text-white text-sm font-medium rounded-4xl py-2 px-4 cursor-pointer">
              Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
      <FeaturedProducts />
    </div>
  </main>
</template>

<style scoped>
  .home-banner-1 {
    background-image: url('../assets/images/home/banner-1.png');
  }
  .home-banner-2 {
    background-image: url('../assets/images/home/banner-2.png');
  }
</style>