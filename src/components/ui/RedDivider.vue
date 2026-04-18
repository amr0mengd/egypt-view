<template>
	<div id="divider" class="flex" :class="{ 'justify-center': justify === 'center' }">
		<hr
			class="h-0.75 w-20 rounded-2xl"
			:class="{
				'bg-white text-white/90': color === 'white',
				'text-primary bg-primary': color === 'red',
			}" />
	</div>
</template>

<script setup>
defineProps({
	justify: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: false,
		default: "red",
	},
});
</script>
