<script setup>

import SeeMoreButton from '@/UI/components/what-i-do/SeeMoreButton.vue';
import { ref, onErrorCaptured } from 'vue'
import CodeSnippetAdapter from '../Adapter/CodeSnippetAdapter.vue';


// baseUrl.get('/users/ejaeja12/repos').then((res) => {
//     console.log(res.data)
// }).catch((e)=>{console.log(e)})

const isErr = ref(false)

onErrorCaptured(() => {
    isErr.value = true
})
</script>

<template>
    <div class="flex flex-col gap-10 mt-20">
        <h1 class="text-5xl text-white font-bold">Code Snippet</h1>
        <Suspense >
            <div class="grid grid-cols-2 gap-8">
                <CodeSnippetAdapter v-if="!isErr"></CodeSnippetAdapter>
                <div v-else><h1 class="text-3xl font-semibold text-red-600">Gagal mengambil data</h1></div>
            </div>

            
                
            <template #fallback>
                <h1 class="text-white text-3xl font-semibold">Loading...</h1>
            </template>
        </Suspense>
        <SeeMoreButton></SeeMoreButton>
    </div>
    
</template>