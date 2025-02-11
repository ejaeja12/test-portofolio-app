<script setup>
import RouteLink from './RouteLink.vue'

defineEmits(['close'])
</script>

<template>
    <div class="flex flex-row bg-slate-500 fixed z-50 top-0 left-0 w-screen h-screen justify-between text-white p-3">
        <div class="flex flex-col gap-20">
            <RouteLink url="/">Home</RouteLink>
        <RouteLink url="/about">About</RouteLink>
        <RouteLink url="/portofolio">Portofolio</RouteLink>
        <RouteLink url="/snipet">Snipet</RouteLink>
        </div>
        <div>
            <h1 @click="$emit('close')" class="text-white text-2xl font-bold"> close</h1>
        </div>
    </div>
</template>