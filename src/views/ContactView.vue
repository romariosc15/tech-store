<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

</script>
<template>
  <div class="px-4 md:px-12 xl:px-28 2xl:px-48 mt-12 mb-24 text-gray-800">
    <div class="text-center mb-8">
      <h2 class="text-4xl font-semibold mb-2">Get in touch</h2>
      <p class="text-sm md:text-base font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat unde quam dolor culpa veritatis inventore, aut commodi eum veniam vel.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 xl:gap-12 mb-12">
      <div class="bg-gray-100 p-4 rounded-lg flex flex-col justify-center text-center">
        <FontAwesomeIcon class="text-3xl lg:text-4xl mb-4" :icon="faLocationDot" />
        <span class="text-base lg:text-lg font-medium">102 Street 2714 Donovan</span>
        <span class="text-sm lg:text-base font-light">Lorem ipsum dolar site amet discont</span>
      </div>
      <div class="bg-gray-100 p-4 rounded-lg flex flex-col justify-center text-center">
        <FontAwesomeIcon class="text-3xl lg:text-4xl mb-4" :icon="faPhone" />
        <span class="text-base lg:text-lg font-medium">+02 1234 567 88</span>
        <span class="text-sm lg:text-base font-light">Lorem ipsum dolar site amet discont</span>
      </div>
      <div class="bg-gray-100 p-4 rounded-lg flex flex-col justify-center text-center">
        <FontAwesomeIcon class="text-3xl lg:text-4xl mb-4" :icon="faEnvelope" />
        <span class="text-base lg:text-lg font-medium">info@example.com</span>
        <span class="text-sm lg:text-base font-light">Lorem ipsum dolar site amet discont</span>
      </div>
    </div>
    <div class="shadow-lg rounded-lg border-t border-gray-50 py-8 md:py-12 lg:py-16 px-4 md:px-12 lg:px-16 xl:px-32">
      <div class="w-full 2xl:w-2/3 mx-auto">
        <div class="text-center">
          <h2 class="text-4xl font-semibold mb-2">Send us</h2>
          <p class="text-base font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat unde quam dolor culpa veritatis inventore, aut commodi eum veniam vel.</p>
        </div>
        <form action="POST">
          <div class="grid grid-cols-1 md:grid-cols-2 my-4 gap-4 md:gap-8">
            <div>
              <label class="text-sm" for="name">Name</label>
              <input required class="bg-gray-100 rounded-md w-full py-2 px-4 mt-2" id="name" name="name" type="text">
            </div>
            <div>
              <label class="text-sm" for="email-address">Email</label>
              <input required class="bg-gray-100 rounded-md w-full py-2 px-4 mt-2" id="email-address" name="email-address" type="email">
            </div>
          </div>
          <div class="mb-4">
            <label class="text-sm" for="subject">Subject</label>
            <input required class="bg-gray-100 rounded-md w-full py-2 px-4 mt-2" id="subject" name="subject" type="text">
          </div>
          <div class="mb-6">
            <label class="text-sm" for="message">Your message</label>
            <textarea required class="bg-gray-100 rounded-md w-full py-2 px-4 mt-2" name="message" id="message" rows="5"></textarea>
          </div>
          <button type="submit" class="bg-blue-900 transition-opacity hover:opacity-80 text-white text-sm font-medium rounded-md py-2.5 xl:py-3 px-6 xl:px-8 cursor-pointer">
            Send message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  
</style>
