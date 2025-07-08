<script setup>
import MainBreadcrumb from '../components/MainBreadcrumb.vue';
import { ref } from 'vue'

let currentTab = ref('login');
const isVisibleTab = (tab) => currentTab.value === tab ? 'block' : 'hidden';
const hasOpacityTab = (tab) => currentTab.value === tab ? '' : 'text-gray-400';
const setTab = (tab) => currentTab.value = tab;
const breadcrumbRoute = [
  { name: 'Home', url: '/home' },
  { name: 'Login', url: '/login' },
];
</script>

<template>
  <div class="px-4 md:px-12 xl:px-28 2xl:px-48">
    <MainBreadcrumb :route="breadcrumbRoute" />
    <div class="px-12 py-16 my-24 mx-auto border rounded-lg border-gray-200 w-[500px]">
      <ul class="flex flex-row justify-center gap-8">
        <li>
          <a class="text-lg font-semibold" :class="hasOpacityTab('login')" href="#" @click.prevent="setTab('login')">LOGIN</a>
        </li>
        <li>
          <a class="text-lg font-semibold" :class="hasOpacityTab('register')" href="#" @click.prevent="setTab('register')">REGISTER</a>
        </li>
      </ul>
      <div :class="isVisibleTab('login')">
        <form action="POST">
          <div class="my-4">
            <label class="text-sm" for="email-address-login">Email</label>
            <input required class="bg-gray-100 rounded-md w-full py-2 px-4 mt-2" id="email-address-login" name="email-address-login" type="email">
          </div>
          <div class="mb-4">
            <label class="text-sm" for="password-login">Password</label>
            <input required class="bg-gray-100 rounded-md w-full py-2 px-4 mt-2" id="password-login" name="password-login" type="password">
          </div>
          <div class="flex items-center mb-4">
            <input class="cursor-pointer" id="remember-login" name="remember-login" type="checkbox">
            <label class="text-sm ml-2" for="remember-login">Remember me</label>
          </div>
          <button type="submit" class="w-full bg-blue-900 transition-opacity hover:opacity-80 text-white text-sm font-medium rounded-md py-2.5 xl:py-3 px-6 xl:px-8 cursor-pointer">
            Log in
          </button>
        </form>
      </div>

      <div :class="isVisibleTab('register')">
        <form action="POST">
          <div class="my-4">
            <label class="text-sm" for="username-register">Username</label>
            <input required class="bg-gray-100 rounded-md w-full py-2 px-4 mt-2" id="username-register" name="username-register" type="text">
          </div>
          <div class="mb-4">
            <label class="text-sm" for="email-address-register">Email</label>
            <input required class="bg-gray-100 rounded-md w-full py-2 px-4 mt-2" id="email-address-register" name="email-address-register" type="email">
          </div>
          <div class="mb-4">
            <label class="text-sm" for="password-register">Password</label>
            <input required class="bg-gray-100 rounded-md w-full py-2 px-4 mt-2" id="password-register" name="password-register" type="password">
          </div>
          <button type="submit" class="w-full bg-blue-900 transition-opacity hover:opacity-80 text-white text-sm font-medium rounded-md py-2.5 xl:py-3 px-6 xl:px-8 cursor-pointer">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
