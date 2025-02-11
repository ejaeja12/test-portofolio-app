<script setup>
import Card from '@/UI/components/what-i-do/Card.vue'
import arrowRight from '@/assets/arrow-link.svg'
</script>

<template>
  <div class="flex md:flex-row flex-col gap-10">
    <div class="mb-10">
      <h1 class="text-white text-2xl font-bold">What I Do</h1>
      <p class="mt-1 max-w-md text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione error nam atque! Enim
        voluptas assumenda molestiae. Magni, non voluptas numquam quo recusandae dolorum magnam
        nulla minima repellendus est cupiditate perferendis?
      </p>
    </div>
    <div class="w-3/4 flex flex-row gap-10">
      <Card></Card>
      <Card></Card>
    </div>
  </div>
</template>
