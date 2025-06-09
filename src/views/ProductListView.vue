<script setup>
import { useAssets } from '../composables/index';
import { RouterLink } from 'vue-router';
const products = [
    {
      id: 1,
      image: 'consola-nintendo-switch.png',
      name: 'Consola Nintendo Switch',
      brand: 'Nintendo',
      price: 1799.99,
    },
    {
      id: 2,
      image: 'audifonos-logitech-pro-x-wireless.png',
      name: 'Audifonos Logitech Pro X Wireless',
      brand: 'Logitech',
      price: 299.99,
    },
    {
      id: 3,
      image: 'mouse-logitech-pro-wireless.png',
      name: 'Mouse Logitech Pro Wireless',
      brand: 'Logitech',
      price: 349.99,
    },
    {
      id: 4,
      image: 'ssd-kingston-480.png',
      name: 'Disco de Estado Sólido 480GB',
      brand: 'Kingston',
      price: 199.99,
    },
    {
      id: 5,
      image: 'tarjeta-grafica-rtx-4070.png',
      name: 'Tarjeta Gráfica RTX 4070',
      brand: 'Nvidia',
      price: 2999.99,
    },
    {
      id: 6,
      image: 'consola-ps5.png',
      name: 'Consola de PlayStation 5',
      brand: 'Sony',
      price: 2199.99,
    },
    {
      id: 7,
      image: 'mando-ps5.png',
      name: 'Mando de PlayStation 5',
      brand: 'Sony',
      price: 299.99,
    },
    {
      id: 8,
      image: 'consola-xbox-series.png',
      name: 'Consola de XBOX Series S',
      brand: 'Microsoft',
      price: 2399.99,
    },
    {
      id: 9,
      image: 'mando-xbox-series.png',
      name: 'Mando de XBOX Series X - S',
      brand: 'Microsoft',
      price: 299.99,
    },
    {
      id: 10,
      image: 'macbook-air-m4.png',
      name: 'MacBook Air M4 2025',
      brand: 'Apple',
      price: 4999.99,
    },
    {
      id: 1,
      image: 'iphone-14.png',
      name: 'iPhone 14',
      brand: 'Apple',
      price: 2699.99,
    },
];
const PRODUCT_LIST_INDEXES = [3, 7, 11, 15, 19];
const getProductClasses = (currentIndex) => {
  const productsLength = products.length - 1;
    let result = '';
    if(PRODUCT_LIST_INDEXES.includes(currentIndex) || currentIndex === productsLength) result += 'border-r';
    if(currentIndex > productsLength - 4) result += ' border-b';

    return result;
};
</script>

<template>
  <main>
    <div class="px-48 mt-12 mb-16">
      <div class="grid grid-cols-4 gap-8 mb-8">
        <div>
          Filtros
        </div>
        <div class="col-span-3 grid grid-cols-4">
          <div
            class="p-4 border-l border-t border-gray-200"
            v-for="(product, key) in products"
            :class="getProductClasses(key)"
            :key="key"
          >
            <RouterLink :to="`/product/${product.id}`">
              <img class="w-full h-[200px] object-cover px-2 py-4" :src="useAssets(`/src/assets/images/products/${product.image}`)" alt="">
            </RouterLink>
            <span class="text-sm font-light text-gray-500">{{ product.brand }}</span>
            <h6 class="text-base/5 font-medium mb-2 line-clamp-1">{{ product.name }}</h6>
            <span class="text-lg font-semibold text-red-600 tracking-tighter">S/. {{ product.price }}</span>
            <button class="w-full transition-colors border-sky-400 border bg-white text-sky-400 hover:bg-sky-400 hover:text-white rounded-3xl text-xs font-medium px-4 py-2 mt-4 cursor-pointer">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  
</style>