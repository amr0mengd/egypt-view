<template>
	<RedHero
		:smallHead="t('ourServices')"
		:Headline="t('translation&interpretation')" />
	<RedCard>
		<div class="space-y-6">
			<RedBlockTitle :title="t('translationTitle')" />
			<div class="space-y-1">
				<p class="text-lg font-medium">
					<RightArrow /> {{ t("translation1") }}
				</p>
				<p class="text-lg font-medium">
					<RightArrow /> {{ t("translation2") }}
				</p>
				<p class="text-lg font-medium">
					<RightArrow /> {{ t("translation3") }}
				</p>
				<p class="text-lg font-medium">
					<RightArrow /> {{ t("translation4") }}
				</p>
			</div>
			<div>
				<h3 class="text-xl leading-7.5 font-medium text-[#555555]">
					{{ t("translationParagraph") }}
				</h3>
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
