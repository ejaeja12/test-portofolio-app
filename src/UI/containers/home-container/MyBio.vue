<script setup>
import personImg from '@/assets/img-placeholder-person.jpg'
import instagramIcon from '@/assets/instagram.svg'
import linkedinIcon from '@/assets/linkedinIcon.svg'
</script>

<template>
  <div class="flex flex-col gap-16 mt-20 mb-28 max-w-full">
    <h1
      class="order-2 md:order-1 md:text-7xl text-4xl leading-snug bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 font-bold text-transparent bg-clip-text"
    >
      HAlo bang, tes porto ini ahhahahahah jaksdjlkasjlkasd
    </h1>
    <!--  -->
    <div class="order-1 md:order-2 flex md:flex-row flex-col gap-20">
      <div class="flex md:flex-row flex-col gap-8">
        <div
          class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 p-1 w-fit h-fit my-auto rounded-full"
        >
          <img class="w-24 rounded-full" :src="personImg" alt="" />
        </div>
        <div>
          <h1 class="text-2xl text-white font-bold">Bio</h1>
          <p class="text-slate-300 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, alias quidem
            asperiores assumenda natus ut ea fuga quibusdam dignissimos tenetur necessitatibus aut.
            Ratione, quas hic exercitationem repellendus adipisci aliquid laborum!
          </p>
        </div>
      </div>

      <div>
        <h1 class="text-2xl text-white font-bold">Contact me</h1>
        <div class="flex flex-row justify-between p-3">
          <img class="w-8" :src="instagramIcon" alt="" />
          <img class="w-8" :src="linkedinIcon" alt="" />
        </div>
      </div>
    </div>
  </div>

  <!--  -->
</template>
