<template>
	<router-link
		class="bg-primary cursor-pointer rounded-xl px-6 py-4 text-xl"
		:class="{ 'text-primary bg-primary/10': inverted, 'text-white': !inverted }"
		:to="to">
		<slot></slot>
	</router-link>
</template>

<script setup>
import { defineProps } from "vue";
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
