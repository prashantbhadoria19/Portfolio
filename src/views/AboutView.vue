<template>
    <section class="w-full" ref="aboutSection" id="about-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-5">😎 About Me</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        <div :class="['flex flex-col gap-y-4 xl:grid xl:grid-cols-2 xl:gap-x-5 xl:gap-y-0 mb-20 md:mb-24 text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <div class="order-2 xl:order-none">
                <p v-for="paragraph in content.autobiography" class="mb-4">{{ paragraph }}</p>
                <div class="space-y-3">
                    <h2 class="font-semibold text-slate-700 dark:text-slate-100">Skills &amp; Technologies</h2>
                    <p v-for="group in content.skillGroups">
                        <span class="font-semibold text-slate-700 dark:text-slate-100">{{ group.category }}:</span>
                        {{ group.items.join(', ') }}
                    </p>
                </div>
            </div>
            <div class="relative w-full order-1 xl:order-none">
                <div class="grid grid-cols-2 grid-rows-2 gap-4 xl:absolute xl:inset-0">
                    <img :src="getImageUrl(content.photo1Link)" alt="Prashant Bhadoria photo 1" class="h-48 sm:h-64 xl:h-full min-h-0 w-full object-cover shadow-md" loading="lazy"/>
                    <img :src="getImageUrl(content.photo2Link)" alt="Prashant Bhadoria photo 2" class="h-48 sm:h-64 xl:h-full min-h-0 w-full object-cover shadow-md" loading="lazy"/>
                    <img :src="getImageUrl(content.photo3Link)" alt="Prashant Bhadoria photo 3" class="h-48 sm:h-64 xl:h-full min-h-0 w-full object-cover shadow-md" loading="lazy"/>
                    <img :src="getImageUrl(content.photo4Link)" alt="Prashant Bhadoria photo 4" class="h-48 sm:h-64 xl:h-full min-h-0 w-full object-cover shadow-md" loading="lazy"/>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { onIntersect } from '../composables/onIntersect'

const props = defineProps({
    content: Object,
    transitions: Object
})

const aboutSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(aboutSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

// Static Images
let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

</script>