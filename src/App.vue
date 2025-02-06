<script setup>
import Header from '@/UI/components/header/Header.vue';
import HomePage from '@/UI/pages/HomePage.vue';
import Footer from '@/UI/components/footer/Footer.vue';
</script>

<template>
  <div class="bg-[#1d1d1d] w-full h-full px-28">
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

