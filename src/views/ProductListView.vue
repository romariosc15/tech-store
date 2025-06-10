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
        <div class="space-y-8">
          <div>
            <h7 class="text-base font-semibold text-blue-950">CATEGORIES</h7>
            <ul class="text-gray-500 font-light space-y-2 mt-3">
              <li class="flex items-center">
                <input class="mr-2" type="checkbox" id="category-1">
                <label class="text-sm" for="category-1">Category 1</label>
              </li>
              <li class="flex items-center">
                <input class="mr-2" type="checkbox" id="category-2">
                <label class="text-sm" for="category-2">Category 2</label>
              </li>
              <li class="flex items-center">
                <input class="mr-2" type="checkbox" id="category-3">
                <label class="text-sm" for="category-3">Category 3</label>
              </li>
            </ul>
          </div>
          <div>
            <h7 class="text-base font-semibold text-blue-950">BRANDS</h7>
            <ul class="text-gray-500 font-light space-y-2 mt-3">
              <li class="flex items-center">
                <input class="mr-2" type="checkbox" id="brand-1">
                <label class="text-sm" for="brand-1">Sony</label>
              </li>
              <li class="flex items-center">
                <input class="mr-2" type="checkbox" id="brand-2">
                <label class="text-sm" for="brand-2">Apple</label>
              </li>
              <li class="flex items-center">
                <input class="mr-2" type="checkbox" id="brand-3">
                <label class="text-sm" for="brand-3">PlayStation</label>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-span-3">
          <div class="product-list-banner-1 w-full h-[250px] bg-center rounded-lg flex justify-center items-center p-8 mb-4">
            <div>
              <h5 class="text-xl font-light text-blue-950">Los mejores precios en</h5>
              <h2 class="text-4xl font-bold text-blue-950">Tecnología</h2>
              <span class="text-sm font-light text-gray-500">Envíos disponibles a todo el país</span>
            </div>
          </div>
          <div class="grid grid-cols-4">
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
    </div>
  </main>
</template>

<style scoped>
  .product-list-banner-1 {
    background-image: url('../assets/images/product-list/banner-2.png');
  }
</style>