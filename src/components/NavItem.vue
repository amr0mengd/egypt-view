<template>
	<router-link
		to="#"
		class="text-[16px]"
		:class="{
			'font-bold underline decoration-2': isActive,
			'font-normal': !isActive,
		}">
		{{ text }}
	</router-link>
</template>

<script setup>
defineProps({
	text: String,
	isActive: {
		type: Boolean,
		default: false,
	},
});
</script>
