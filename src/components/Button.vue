<script lang="ts" setup>

const props = defineProps<{
	title?: string
	type?: 'button' | 'submit'
	square?: boolean
	loading?: boolean
	disabled?: boolean
	iconPosition?: 'left' | 'right'
	btnStyle: string
	icon?: string
	to?: string
}>()

const emits = defineEmits<{
	(e: 'click'): void
}>()
</script>

<template>
		<button
			:type="props.type"
			:disabled="props.disabled"
			:class="{
				'text-white-100 bg-blue-100': props.btnStyle === 'primary',
				'text-blue-100 bg-white-100 border border-blue-100 rounded-2xl':
					props.btnStyle === 'primary-outline',
				'text-white-100 bg-status-success': props.btnStyle === 'success',
				'text-white-100 bg-status-error': props.btnStyle === 'error',
				'text-gray-500 bg-white-100 border border-white-500':
					props.btnStyle === 'default',
				'text-black-100 bg-white-500 hover:bg-blue-200 hover:text-white-100':
					props.btnStyle === 'gray',
				'text-white-100 bg-gray-100 hover:cursor-not-allowed': props.disabled,
				'h-10 w-10 rounded-lg': props.square,
				'w-full rounded-xl': !props.square,
			}"
			class="flex items-center justify-center p-4 text-xs cursor-pointer"
			@click="emits('click')"
		>
			<span v-if="props.loading === false">
				{{ props.title }}
			</span>
		</button>
</template>
