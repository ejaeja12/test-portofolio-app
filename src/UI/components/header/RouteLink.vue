<script setup>
defineProps(['url'])

</script>

<template>
    <router-link activeClass="underline underline-offset-8 text-green-300" :to="url">
        <slot></slot>
    </router-link>

</template>