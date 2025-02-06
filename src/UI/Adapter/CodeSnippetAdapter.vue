<script setup>
import { getGithubRepo } from '@/data/apiServices.js';
import { ref } from 'vue' 
import Card from '@/UI/components/code-snippet/Card.vue';

const data = ref([])
const response = await getGithubRepo()
data.value = response.data
</script>

<template>
<div v-for="(item, index) in data" :key="index">
    <a target="_blank" :href="item.html_url">
        <Card :name="item.name" :star="item.stargazers_count" :description="item.description"></Card>
    </a>

</div>
</template>