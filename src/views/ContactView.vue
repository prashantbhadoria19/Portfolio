<template>
    <section class="w-full flex flex-col pb-12" ref="contactSection" id="contact-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
            <h1 class="text-3xl font-bold px-5">📭 Contact</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        <div :class="['flex flex-col pt-2 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <div class="mx-auto max-w-2xl space-y-4 text-center">
                <p class="text-slate-500 dark:text-slate-300">{{ content.intro }}</p>
                <div class="flex flex-col items-center gap-2 text-slate-500 dark:text-slate-300">
                    <a class="break-all hover:text-button-color" :href="`mailto:${content.email}`">{{ content.email }}</a>
                    <a class="hover:text-button-color" :href="`tel:${content.phone.replace(/[^+\d]/g, '')}`">{{ content.phone }}</a>
                    <p>{{ content.location }}</p>
                </div>
                <nav class="flex flex-wrap justify-center gap-3" aria-label="Professional profiles">
                    <a
                        v-for="link in content.links"
                        :key="link.label"
                        :href="link.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="border border-button-color px-5 py-2 text-button-color shadow-sm shadow-button-color transition-colors duration-300 hover:bg-button-color hover:text-white focus:bg-button-color focus:text-white"
                    >
                        {{ link.label }}
                    </a>
                </nav>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { onIntersect } from '../composables/onIntersect';

const props = defineProps({
    content: Object,
    transitions: Object
})

const contactSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(contactSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

</script>