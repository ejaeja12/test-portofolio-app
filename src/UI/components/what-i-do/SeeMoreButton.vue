<script setup>
import seeMoreButton from '@/assets/menu-see-more.svg'
</script>

<template>
  <div class="mt-10 rounded-xl bg-slate-700 w-fit h-fit flex flex-row justify-between gap-3 px-3">
    <img class="w-8" :src="seeMoreButton" alt="" />

    <div class="flex flex-col justify-center">
      <h1 class="text-white">See More</h1>
    </div>
  </div>
</template>
