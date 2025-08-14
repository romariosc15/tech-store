<script setup>
import { watch } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { storeToRefs } from 'pinia';
import { useNotificationStore } from '@/stores/notification';

const notificationStore = useNotificationStore();

const { notification, isNotificationVisible } = storeToRefs(notificationStore);
const { setVisibility } = notificationStore;

const closeNotificationMessage = () => setVisibility(false);

watch(isNotificationVisible, (newValue) => {
    if(newValue) {
        setTimeout(() => setVisibility(false), 3000);
    }
})
</script>
<template>
    <div
        v-show="isNotificationVisible"
        class="flex flex-row items-center rounded-lg gap-4 fixed top-8 right-8 bg-green-50 border-gray-300 border px-6 py-4"
    >
        <FontAwesomeIcon class="text-4xl text-green-700" :icon="faCircleCheck" />
        <div>
            <div class="flex flex-row justify-between items-center mb-1">
                <h5 class="text-base font-bold">{{ notification.title }}</h5>
                <FontAwesomeIcon @click="closeNotificationMessage" class="text-base cursor-pointer" :icon="faXmark" />
            </div>
            <p class="text-sm">{{ notification.message }}</p>
        </div>
    </div>
</template>

<style scoped>
</style>
