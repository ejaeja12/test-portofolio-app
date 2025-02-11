<script setup>
import RouteLink from './RouteLink.vue'
import HeaderMobile from './HeaderMobile.vue';
import LinkMenuMobile from './LinkMenuMobile.vue';
import { ref } from 'vue';

const isOpen = ref(false)

const toggleMenu = () => {
  if(isOpen.value === true) {
    isOpen.value = false
  }else{
    isOpen.value = true
  }

  console.log(isOpen.value)
}
</script>

<template>
  <div class="flex flex-row justify-between w-full py-6 border-b-1 border-slate-700">
    <div>
      <h3 class="text-white text-2xl font-bold">Reza</h3>
    </div>

    <div>
      <HeaderMobile class="hidden max-sm:block" @click="toggleMenu"></HeaderMobile>
      <LinkMenuMobile @close="toggleMenu" v-if="isOpen" class="sm:hidden"></LinkMenuMobile>
    </div>

    <div class="flex flex-row gap-20 text-white header-link-sm header-link-sm">
      <RouteLink url="/">Home</RouteLink>
      <RouteLink url="/about">About</RouteLink>
      <RouteLink url="/portofolio">Portofolio</RouteLink>
      <RouteLink url="/snipet">Snipet</RouteLink>
    </div>
  </div>
</template>

<style>
@reference "tailwindcss";

.header-link-sm {
  @apply max-sm:hidden;
}


</style>
