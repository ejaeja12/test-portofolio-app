<script setup>
import RouteLink from './RouteLink.vue'
</script>

<template> 
    <div class="hidden md:flex flex-row justify-between w-full  py-6 border-b-1 border-slate-700">
        <div>
            <h3 class="text-white text-2xl font-bold">Reza </h3>
        </div>

        <div class="flex flex-row gap-20 text-white">
            <RouteLink url="/">Home</RouteLink>
            <RouteLink url="/about">About</RouteLink>
            <RouteLink url="/portofolio">Portofolio</RouteLink>
            <RouteLink url="/snipet">Snipet</RouteLink>



           
        </div>
    </div>
</template>