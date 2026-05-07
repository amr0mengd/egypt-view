<template>
	<RedHero :smallHead="t('ourServices')" :Headline="t('translation&interpretation')" />
	<RedCard>
		<div class="space-y-6">
			<RedBlockTitle :title="t('translationTitle')" />
			<div class="space-y-1">
				<p class="font-medium text-lg"><RightArrow /> {{ t("translation1") }}</p>
				<p class="font-medium text-lg"><RightArrow /> {{ t("translation2") }}</p>
				<p class="font-medium text-lg"><RightArrow /> {{ t("translation3") }}</p>
				<p class="font-medium text-lg"><RightArrow /> {{ t("translation4") }}</p>
			</div>
			<div>
				<h3 class="text-xl font-medium text-[#555555] leading-7.5">{{ t("translationParagraph") }}</h3>
			</div>
		</div>
	</RedCard>
	<CTA svg="pharaoh" />
</template>

<script setup>
import CTA from "@/components/layout/CTA.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
