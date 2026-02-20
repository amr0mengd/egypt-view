<template>
	<router-link
		to="#"
		class="text-primary text-[16px]"
		:class="{
			'font-black underline underline-offset-auto decoration-2': isActive,
			'font-medium': !isActive,
		}">
		{{ text }}
	</router-link>
</template>

<script>
export default {
	props: {
		text: String,
		isActive: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
