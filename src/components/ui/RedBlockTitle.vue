<template>
	<div class="flex items-center space-x-2.5">
		<span class="bg-primary inline-block h-3 w-3"></span>
		<h1 class="text-2xl leading-9 font-semibold">{{ title }}</h1>
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
});
</script>
