<script setup>
import htmlLogo from '@/assets/html.svg'
import tailwindLogo from '@/assets/tailwind.svg'
import starLogo from '@/assets/star.svg'

defineProps({
  name: String,
  star: Number,
  description: String,
})
</script>

<template>
  <div class="grid grid-cols-4 gap-1 bg-slate-800 py-4 px-8 rounded-2xl hover:bg-slate-700">
    <div class="col-span-4 h-48 flex flex-col gap-5">
      <h1 class="text-3xl font-bold mt-5 text-white">{{ name }}</h1>
      <p class="text-white">{{ description }}</p>
    </div>

    <div class="col-span-2 flex flex-row gap-3 py-4">
      <!-- logo -->
      <img class="bg-slate-200 rounded-lg w-8" :src="tailwindLogo" alt="" />
      <img class="bg-slate-200 rounded-lg w-8" :src="htmlLogo" alt="" />
    </div>

    <div class="col-span-2 flex flex-row justify-end gap-3">
      <!-- star -->
      <img class="w-8" :src="starLogo" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-white">{{ star }}</p>
      </div>
    </div>
  </div>
</template>
