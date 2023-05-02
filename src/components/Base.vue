<script setup lang="ts">

const props = defineProps<{
	spacing?: boolean
}>()
</script>

<template>
  <div 
    class="bg-gray-300 h-screen w-full fixed z-30" 
    :class="{
      'p-24' : props.spacing
    }
  ">
    <div class="bg-white-100 h-full rounded-xl border-none flex flex-col">
        <slot />
    </div>
  </div>
</template>


