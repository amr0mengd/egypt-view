<template>
	<label
		:for="id"
		class="text-sm font-semibold tracking-[0.7px] text-[#555555]"
		>{{ label }}</label
	>
	<input
		v-if="type !== 'textarea'"
		:type="type"
		:id="id"
		:name="id"
		:placeholder="placeholder"
		class="border-primary mt-1.5 w-full rounded-lg border bg-white px-4 py-2" />
	<textarea
		v-if="type === 'textarea'"
		:type="type"
		:id="id"
		:name="id"
		:placeholder="placeholder"
		class="border-primary mt-1.5 w-full rounded-lg border bg-white px-4 py-2" />
</template>

<script setup>
defineProps({
	id: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
});
</script>
