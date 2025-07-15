<script setup>
import { ref } from 'vue';
import { useAssets } from '../composables/index';
import { RouterLink } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useCartStore } from '@/stores/cart';

const { productData: product } = defineProps({
  productData: Object,
});

const cartStore = useCartStore();

const { addProductToCart } = cartStore;

let isLoading = ref(false);
const handleAddToCart = (product) => {
  isLoading.value = true;
  addProductToCart({...product, quantity: 1});
  setTimeout(() => isLoading.value = false, 1000);
};
</script>
<template>
    <div class="p-4 border -m-[0.5px] border-gray-200">
        <RouterLink :to="`/product/${product.id}`">
            <img class="w-full h-[200px] object-cover" :src="useAssets(`/src/assets/images/products/${product.image}`)" alt="">
        </RouterLink>
        <span class="text-sm font-light text-gray-500">{{ product.brand }}</span>
        <h6 class="text-base/5 font-medium mb-2 line-clamp-1">{{ product.name }}</h6>
        <span class="text-lg font-semibold text-red-600 tracking-tighter">S/. {{ product.price }}</span>
        <button
            :disabled="isLoading"
            @click="handleAddToCart(product)"
            :class="isLoading ? 'cursor-not-allowed bg-gray-100' : 'cursor-pointer bg-white hover:bg-sky-400 hover:text-white'"
            class="w-full transition-colors border-sky-400 border text-sky-400 rounded-3xl text-xs font-medium px-4 py-2 mt-4"
        >
            <FontAwesomeIcon v-if="isLoading" class="animate-spin" size="1x" :icon="faSpinner" />
            <span v-else>Agregar al carrito</span>
        </button>
    </div>
</template>

<style scoped>

</style>
