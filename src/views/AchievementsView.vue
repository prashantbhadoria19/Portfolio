<template>
    <section ref="achievementsSection" id="achievements-section" class="w-full mb-20 md:mb-24">
        <div :class="['transition-all motion-reduce:transition-none duration-500', visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <div class="relative flex py-5 items-center">
                <h2 class="text-3xl font-bold pr-5">Certifications &amp; Achievements</h2>
                <div class="flex-grow border-t border-black dark:border-white"></div>
            </div>
            <div class="grid gap-4">
                <article v-for="item in content" :key="item.title" class="rounded-md bg-white dark:bg-slate-800 p-5 shadow-md">
                    <p class="text-sm font-semibold text-button-color dark:text-slate-300">{{ item.category }}</p>
                    <h3 class="text-xl font-bold mt-2">{{ item.title }}</h3>
                    <p class="mt-2 text-slate-500 dark:text-slate-300">{{ item.description }}</p>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { onIntersect } from '../composables/onIntersect'

const props = defineProps({
    content: Array,
    transitions: Object
})

const achievementsSection = ref(null)
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    ? onIntersect(achievementsSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption })
    : true
</script>
