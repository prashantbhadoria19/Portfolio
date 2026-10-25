<template>
    <div :class="['flex flex-col lg:gap-x-4 transition-opacity motion-reduce:transition-none duration-500', project.imageLink ? 'lg:grid lg:grid-cols-2' : '', showProject ? 'opacity-100' : 'opacity-0']">
        <div v-if="project.imageLink && !project.alignLeft" class="order-first flex h-full items-stretch pb-4 lg:pb-0 lg:order-none">
            <img
                @load="showProject = !showProject"
                :src="getImageUrl(project.imageLink)"
                :alt="project.projectName"
                :style="project.imageMaxHeight ? { maxHeight: project.imageMaxHeight } : undefined"
                class="h-full w-full object-fill shadow-md"
                loading="lazy"
            />
        </div>
        <div class="flex flex-col space-y-4" :class="project.alignLeft || !project.imageLink ? 'text-left' : 'lg:text-right'">
            <p v-if="project.yearCompleted">{{ project.yearCompleted }}</p>
            <h3 class="text-xl font-extrabold pb-2">{{ project.projectName }}</h3>
            <p class="text-slate-500 dark:text-slate-300">{{ project.description }}</p>
            <p class="text-slate-600">{{ project.techStack }}</p>
            <div class="flex space-x-6 items-center text-slate-400" :class="!project.alignLeft ? 'lg:justify-end' : ''">
                <a v-for="link in project.links" :key="link.url" :href="link.url" class="flex items-center space-x-2 hover:text-link-color focus:text-link-color active:text-link-color" target="_blank" rel="noopener noreferrer">
                    <span v-if="link.type == 'git'" class="flex items-center space-x-2">
                        <font-awesome-icon icon="fa-brands fa-github" class="h-7 w-7"></font-awesome-icon>
                        <span>{{ link.label }}</span>
                    </span>
                    <span v-else-if="link.type == 'external'" class="flex items-center space-x-2">
                        <ArrowTopRightOnSquareIcon class="h-7 w-7"/>
                        <span>{{ link.label }}</span>
                    </span>
                    <span v-else class="flex items-center space-x-2">
                        <LinkIcon class="h-6 w-6"/>
                        <span>{{ link.label }}</span>
                    </span>
                </a>
            </div>
        </div>
        <div v-if="project.imageLink && project.alignLeft" class="order-first flex h-full items-stretch pb-4 lg:pb-0 lg:order-none">
            <img
                @load="showProject = !showProject"
                :src="getImageUrl(project.imageLink)"
                :alt="project.projectName"
                :style="project.imageMaxHeight ? { maxHeight: project.imageMaxHeight } : undefined"
                class="h-full w-full object-fill shadow-md"
                loading="lazy"
            />
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { LinkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    project: Object
})

// Static Images
const showProject = ref(!props.project.imageLink)

let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

</script>