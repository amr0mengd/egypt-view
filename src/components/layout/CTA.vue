<template>
	<div class="bg-primary relative flex flex-col items-center justify-center rounded-2xl py-10 overflow-hidden">
		<div class="space-y-4 text-center text-white">
			<h2 class="text-[40px] font-medium">{{ t("explore") }}</h2>
			<p class="text-xl font-medium">{{ t("adventure") }}</p>
		</div>
		<BasicButton :inverted="true" to="contact" class="bg-white/90 mt-10">Book Now</BasicButton>
		<IconSVG :name="svg" class=" absolute -bottom-12 -right-6"/>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import BasicButton from "../ui/BasicButton.vue";
import IconSVG from "../ui/IconSVG.vue";
const { t } = useI18n();
defineProps({
	svg: String,
});
</script>
