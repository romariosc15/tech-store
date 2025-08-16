<script setup>
import { ref } from 'vue';
import { useAssets } from '../composables/index';
import { RouterLink } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useCartStore } from '@/stores/cart';

import { useNotificationStore } from '@/stores/notification';
const notificationStore = useNotificationStore();
const { setNotification, setVisibility } = notificationStore;

const { productData: product } = defineProps({
  productData: Object,
});

const cartStore = useCartStore();

const { addProductToCart } = cartStore;

let isLoading = ref(false);
const handleAddToCart = (product) => {
    isLoading.value = true;
    addProductToCart({...product, quantity: 1});
    setTimeout(() => {
        isLoading.value = false;
        setNotification({type: 'success', title: 'Success', message: 'Product added to cart successfully.'});
        setVisibility(true);
    }, 500);
};
</script>
<template>
    <div class="p-4">
        <RouterLink :to="`/product/${product.id}`">
            <img class="mx-auto w-[270px] md:w-[260px] lg:w-[250px] xl:w-[200px] 2xl:w-[230px] h-[250px] md:h-[230px] lg:h-[240px] xl:h-[200px] 2xl:h-[230px] object-cover px-2 py-4" :src="useAssets(`/src/assets/images/products/${product.image}`)" alt="">
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
