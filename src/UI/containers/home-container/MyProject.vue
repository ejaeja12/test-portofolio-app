<script setup>
import { ref } from 'vue'
import MyProjectComponent from '@/UI/components/my-project/MyProjectComponent.vue'
import { data } from '@/data/dataFeaturedProject'
import SeeMoreButton from '@/UI/components/what-i-do/SeeMoreButton.vue'

const dataFeatured = ref(data)
</script>

<template>
  <div class="mt-20 max-w-full">
    <h1 class="text-5xl text-white font-bold">Featured</h1>
    <ul v-for="item in data">
      <MyProjectComponent :title="item.title" :image="item.image" :desc="item.desc" />
    </ul>
    <SeeMoreButton></SeeMoreButton>
  </div>
</template>
