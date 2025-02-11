<script setup>
import MyBio from '@/UI/containers/home-container/MyBio.vue'
import MyProject from '@/UI/containers/home-container/MyProject.vue'
import WhatDo from '@/UI/containers/home-container/WhatDo.vue'
import CodeSnippet from '@/UI/containers/home-container/CodeSnippet.vue'
</script>

<template>
  <div class="flex flex-col gap-20 mb-20">
    <MyBio></MyBio>
    <WhatDo></WhatDo>
    <MyProject></MyProject>
    <CodeSnippet></CodeSnippet>
  </div>
</template>
