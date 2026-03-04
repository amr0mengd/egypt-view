<template>
	<router-link
		class="bg-primary cursor-pointer rounded-2xl px-6 py-4 text-xl font-bold hover:shadow-[0_2px_12px_rgba(0,0,0,0.25)] active:shadow-[0_1px_6px_rgba(0,0,0,0.3)]"
		:class="{ 'text-primary bg-primary/10': inverted, 'text-white': !inverted }"
		:to="to">
		<slot></slot>
	</router-link>
</template>

<script setup>
defineProps({
	inverted: {
		type: Boolean,
		default: false,
	},
	to: {
		type: String,
		required: true,
	},
});
</script>
