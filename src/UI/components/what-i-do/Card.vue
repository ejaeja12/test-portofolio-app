<script setup>
import imgGeneral from '@/assets/img-placeholder-general.png'
</script>

<template>
  <div class="w-3/4 rounded-3xl bg-gray-700 relative">
    <div class="w-full h-full absolute -top-7 flex justify-center">
      <div
        class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 p-1 w-fit h-fit rounded-full"
      >
        <div class="rounded-full w-15 h-15 bg-gray-700">
          <img class="rounded-full aspect-square object-scale-down" :src="imgGeneral" alt="" />
        </div>
      </div>
    </div>

    <div class="w-full h-full flex flex-col justify-end p-5">
      <h1 class="w-full text-center text-slate-200 font-bold mb-3">Web development</h1>
      <p class="text-sm w-full text-center text-white leading-loose">
        asdfasdvs as vsav asv as as vsa vsav asv sav a geabav sadgafbv
      </p>
    </div>
  </div>
</template>
