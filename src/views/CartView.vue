<script setup>
import MainBreadcrumb from '../components/MainBreadcrumb.vue';
import NewsletterBanner from '../components/NewsletterBanner.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useAssets } from '../composables/index';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cart';

const breadcrumbRoute = [
  { name: 'Home', url: '/home' },
  { name: 'Cart', url: '/cart' },
];

const cartStore = useCartStore();

const { cart, totalPrice } = storeToRefs(cartStore);
const { removeProductFromCart } = cartStore;

</script>

<template>
  <div class="px-4 md:px-12 xl:px-28 2xl:px-48">
    <MainBreadcrumb :route="breadcrumbRoute" />
    <div v-if="cart.length === 0" class="px-12 py-16 mt-16 mb-32 text-center">
      <img class="w-[200px] mx-auto" src="/src/assets/images/cart/empty-cart.png" alt="Your cart is empty">
      <p class="text-gray-800 text-xl font-bold mb-4">Your cart is currently empty.</p>
      <RouterLink to="/" class="inline-block bg-blue-900 transition-opacity hover:opacity-80 text-white text-base font-medium rounded-4xl py-3 px-8 cursor-pointer">
        Return to shop
      </RouterLink>
    </div>
    <div class="mt-8 md:mt-16 mb-16 md:mb-32 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-8" v-else>
      <table class="cart-table col-span-1 lg:col-span-2 2xl:col-span-3 text-sm h-fit">
        <thead>
          <tr class="border-b border-gray-200 text-gray-700 text-left">
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th class="hidden md:table-cell">Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200 text-gray-800" v-for="product in cart" :key="product.id">
            <td>
              <img class="h-[50px] object-cover mx-auto" :src="useAssets(`/src/assets/images/products/${product.image}`)" :alt="product.name">
            </td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td class="text-center">{{ product.quantity }}</td>
            <td class="hidden md:table-cell">{{ product.price * product.quantity }}</td>
            <td>
              <button class="cursor-pointer" @click="removeProductFromCart(product.id)">
                <FontAwesomeIcon size="1x" :icon="faXmark" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="border border-gray-200 rounded-lg p-4">
        <h6 class="text-lg pb-2 font-bold border-b border-gray-200">CART TOTALS</h6>
        <div class="flex flex-row items-center justify-between py-3 border-b border-gray-200">
          <span class="text-sm">Subtotal</span>
          <span class="text-base font-medium">${{ totalPrice }}</span>
        </div>
        <div class="grid grid-cols-2 items-center py-3 border-b border-gray-200">
          <div class="text-sm">
            <span>Shipping</span>
          </div>
          <div class="text-sm space-y-2 text-right">
            <p>Flat rate: $5:00</p>
            <p>Local pickup</p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-between py-3 mb-4 border-b border-gray-200">
          <span class="text-sm">Total</span>
          <span class="text-lg font-semibold">$24.90</span>
        </div>
        <button type="submit" class="w-full bg-blue-900 transition-opacity hover:opacity-80 text-white text-sm font-medium rounded-md py-2.5 xl:py-3 px-6 xl:px-8 cursor-pointer">
          Proceed to checkout
        </button>
      </div>
    </div>
  </div>
  <NewsletterBanner />
</template>

<style scoped>
  .cart-table tbody tr td, .cart-table thead tr th {
    padding: 0.5rem;
  }
</style>
