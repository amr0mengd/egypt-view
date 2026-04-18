<template>
	<router-link
		:to="to"
		class="text-[16px]"
		active-class="font-bold underline decoration-2">
		{{ text }}
	</router-link>
</template>

<script setup>
defineProps({
	text: String,
	to: String,
});
</script>
