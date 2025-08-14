import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', () => {
  const notification = ref({});
  const isNotificationVisible = ref(false);

  function setVisibility(isVisible) {
    isNotificationVisible.value = isVisible;
  }

  function setNotification(newValue) {
    notification.value = newValue;
  }

  return { notification, isNotificationVisible, setNotification, setVisibility };
});
