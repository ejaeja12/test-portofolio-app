<script setup>
import githubIcon from '@/assets/github.svg'
import emailIcon from '@/assets/email.svg'
import linkeinIcon from '@/assets/linkedinIcon.svg'
</script>

<template>
    <div class="hidden md:flex w-full h-fit bg-transparent border-t-1 border-slate-700 text-slate-300 font-semibold py-12">
        <div class="w-full h-full flex flex-col justify-center items-center gap-5">
            <div class="flex flex-row gap-20 mb-6">
                <a href="">link1</a>
                <a href="">link1</a>
                <a href="">link1</a>
                <a href="">link1</a>
            </div>

            <h1>Reach me out</h1>
            <div class="flex flex-row gap-16">
                <img class="w-8" :src="githubIcon" alt="">
                <img class="w-8" :src="emailIcon" alt="">
                <img class="w-8" :src="linkeinIcon" alt="">
            </div>
        </div>
    </div>
</template>