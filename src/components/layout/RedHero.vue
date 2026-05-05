<template>
	<div
		class="to-primary flex min-h-90 justify-around bg-linear-to-r from-[#8B0000]">
		<div
			class="flex flex-col items-center justify-center space-y-2 font-bold text-white">
			<p class="text-sm tracking-[2px]">{{ smallHead }}</p>
			<h1 class="text-[64px]">{{ Headline }}</h1>
			<p v-if="phrase" class="text-xl font-semibold">{{ phrase }}</p>
		</div>
	</div>
</template>

<script setup>
defineProps({
	smallHead: {
		type: String,
		required: true,
	},
	Headline: {
		type: String,
		required: true,
	},
	phrase: String,
});
</script>
