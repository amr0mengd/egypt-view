<template>
	<div
		class="bg-primary/10 text-primary mt-1 rounded-full border-2 px-6 py-2.5">
		<div class="flex items-center space-x-2">
			<IconSVG :name="svg" class="h-7 w-7" />
			<p class="text-xl">{{ pillText }}</p>
		</div>
	</div>
</template>

<script setup>
import IconSVG from "./IconSVG.vue";

defineProps({
	pillText: {
		type: String,
		required: true,
	},
	svg: String,
});
</script>
