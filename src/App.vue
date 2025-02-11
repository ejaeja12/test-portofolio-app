<script setup>
import Header from '@/UI/containers/header/Header.vue'
import HomePage from '@/UI/view/HomePage.vue'
import Footer from '@/UI/containers/footer/Footer.vue'
</script>

<template>
  <div class="bg-[#1d1d1d] p-5 md:px-28 w-full h-full">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style scope>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #1e1e1e;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #282828;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #313131;
}
</style>
