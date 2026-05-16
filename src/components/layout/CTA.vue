<template>
	<div
		class="bg-primary relative container mx-auto mb-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl py-10">
		<div class="space-y-4 text-center text-white">
			<h2 class="text-[40px] font-medium">{{ t("explore") }}</h2>
			<p class="text-xl font-medium">{{ t("adventure") }}</p>
		</div>
		<BasicButton :inverted="true" to="contact" class="mt-10 bg-white/90"
			>Book Now</BasicButton
		>
		<IconSVG :name="svg" class="absolute right-0 bottom-0 opacity-25" />
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import IconSVG from "../ui/IconSVG.vue";

defineProps({
	svg: String,
});

const { t } = useI18n();
</script>
