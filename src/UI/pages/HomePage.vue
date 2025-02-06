<script setup>
import MyBio from '@/UI/view/MyBio.vue';
import MyProject from '@/UI/view/MyProject.vue';
import WhatDo from '@/UI/view/WhatDo.vue';
import CodeSnippet from '@/UI/view/CodeSnippet.vue';
</script>

<template>
   <div class="flex flex-col gap-20 mb-20">
    <MyBio></MyBio>
    <WhatDo></WhatDo>
    <MyProject></MyProject>
    <CodeSnippet></CodeSnippet>
   </div>
</template>

