<template>
	<div
		class="to-primary relative flex min-h-90 flex-col items-center justify-center space-y-2 bg-linear-to-r from-[#8B0000] font-bold text-white">
		<img
			v-if="img"
			src="../../assets/teamHero.jpg"
			class="absolute inset-0 z-5 h-full w-full object-cover object-[0_25%] opacity-25" />
		<p class="z-10 text-sm tracking-[2px]">{{ smallHead }}</p>
		<h1 class="z-10 text-[64px]">{{ Headline }}</h1>
		<p v-if="phrase" class="text-xl font-semibold">{{ phrase }}</p>
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
	img: Boolean,
});
</script>
