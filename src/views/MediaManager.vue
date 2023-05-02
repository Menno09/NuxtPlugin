<script setup lang="ts">
import Base from '../components/Base.vue'
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'

const props = defineProps<{
	spacing?: boolean
}>()

const emit = defineEmits<{
	(event: 'close'): void
  (event: 'selectImages'): void
}>()

</script>

<template>
  <Base :spacing="props.spacing">
    <Header title="MediaManager" @close="emit('close')" />
    <div class="h-full flex flex-col px-6">
      <div class="grid grid-cols-2 gap-4 h-full">
        <div >01</div>
        <!-- ... -->
        <div>09</div>
      </div>
      <div class="flex  my-6 ">
        <Button title="Save" btn-style="primary" />
        <Button title="Save" btn-style="success" class="self-end" />
      </div>
    </div>


  </Base>
</template>


