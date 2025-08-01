import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);

  const totalItems = computed(() =>
    cart.value.reduce((sum, item) => sum + item.quantity, 0)
  );

  const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
  );

  function addProductToCart(newItem) {
    const existing = cart.value.find(item => item.id === newItem.id);
    if (existing) {
      existing.quantity += newItem.quantity;
    } else {
      cart.value.push({ ...newItem });
    }
    localStorage.setItem('cart', JSON.stringify(cart.value));
  }

  function removeProductFromCart(id) {
    cart.value = cart.value.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart.value));
  }

  return { cart, totalItems, totalPrice, addProductToCart, removeProductFromCart };
});
