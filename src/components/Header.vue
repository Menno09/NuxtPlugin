<script setup lang="ts">

const props = defineProps<{
	title: string
}>()

const emit = defineEmits<{
	(event: 'close'): void
}>()

</script>

<template>

    <div class=" border-b-stone-700 flex justify-between py-3 px-8  shadow-lg">
        <h1 class=" text-2xl">{{ props.title }}</h1>
        <span class=" text-xl " @click="emit('close')">X</span>
    </div>

</template>


