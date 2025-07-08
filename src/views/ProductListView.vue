<script setup>
import MainBreadcrumb from '../components/MainBreadcrumb.vue';
import { useAssets } from '../composables/index';
import { RouterLink } from 'vue-router';
import { productList as products } from '../mocks/products';

const PRODUCT_LIST_INDEXES = [3, 7, 11, 15, 19, 23];
const getProductClasses = (currentIndex) => {
  const productsLength = products.length - 1;
    let result = '';
    if(PRODUCT_LIST_INDEXES.includes(currentIndex) || currentIndex === productsLength) result += 'border-r';
    if(currentIndex > productsLength - 4) result += ' border-b';

    return result;
};

const breadcrumbRoute = [
  { name: 'Home', url: '/home' },
  { name: 'Product list', url: '/products' },
];
</script>

<template>
  <main>
    <div class="px-4 md:px-12 xl:px-28 2xl:px-48">
      <MainBreadcrumb :route="breadcrumbRoute" />
      <div class="grid grid-cols-4 gap-8 mt-8 mb-24">
        <div class="space-y-8">
          <div>
            <h6 class="text-base font-semibold text-blue-950">CATEGORIES</h6>
            <ul class="text-gray-500 font-light space-y-2 mt-3">
              <li class="flex items-center">
                <input class="mr-2 cursor-pointer" type="checkbox" id="category-1">
                <label class="text-sm" for="category-1">Category 1</label>
              </li>
              <li class="flex items-center">
                <input class="mr-2 cursor-pointer" type="checkbox" id="category-2">
                <label class="text-sm" for="category-2">Category 2</label>
              </li>
              <li class="flex items-center">
                <input class="mr-2 cursor-pointer" type="checkbox" id="category-3">
                <label class="text-sm" for="category-3">Category 3</label>
              </li>
            </ul>
          </div>
          <div>
            <h6 class="text-base font-semibold text-blue-950">BRANDS</h6>
            <ul class="text-gray-500 font-light space-y-2 mt-3">
              <li class="flex items-center">
                <input class="mr-2 cursor-pointer" type="checkbox" id="brand-1">
                <label class="text-sm" for="brand-1">Sony</label>
              </li>
              <li class="flex items-center">
                <input class="mr-2 cursor-pointer" type="checkbox" id="brand-2">
                <label class="text-sm" for="brand-2">Apple</label>
              </li>
              <li class="flex items-center">
                <input class="mr-2 cursor-pointer" type="checkbox" id="brand-3">
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