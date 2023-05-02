<script setup lang="ts">
import Base from '../components/Base.vue'
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'

const emit = defineEmits<{
	(event: 'close'): void
  (event: 'selectImages'): void
}>()

</script>

<template>
  <Base>
    <Header title="MediaManager" @close="emit('close')" />
    <Button title="Save" btn-style="success" />
  </Base>
</template>


