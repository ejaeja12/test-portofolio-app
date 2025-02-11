<script setup>
import placeHolderGeneral from '@/assets/img-placeholder-general.png'
import arrowCorner from '@/assets/arrow-link.svg'

// const prop = defineProps([
//     'title',
//     'category',
//     'image',
//     'desc',
// ])

const prop = defineProps({
  title: String,
  category: String,
  image: String,
  desc: String,
})

const getImage = () => {
  return new URL(prop.image, import.meta.url).href
}
</script>

<template>
  <div class="mt-10 flex flex-col md:flex-row">
    <div class="pt-5 p-3 w-1/3 bg-slate-600 relative">
      <a class="rounded-xl bg-slate-500 hover:bg-slate-600 p-3 absolute right-0 top-0" href="">
        <img class="w-6" :src="arrowCorner" alt="" />
      </a>
      <img class="" :src="getImage()" alt="" />
    </div>
    <div class="p-5 flex flex-col gap-3 max-w-xl">
      <h1 class="text-slate-200 text-l font-semibold">WebDev</h1>
      <h2 class="text-white text-l font-bold">{{ title }}</h2>
      <p class="text-slate-300">{{ desc }}</p>
    </div>
  </div>
</template>
