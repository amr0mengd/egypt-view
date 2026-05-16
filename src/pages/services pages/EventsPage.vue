<template>
	<RedHero :smallHead="t('ourServices')" :Headline="t('events&research')" />
	<RedCard>
		<div>
			<RedBlockTitle :title="t('fairs')" />
			<p class="text-lg font-medium text-[#555555]">
				<RightArrow /> {{ t("fairs1") }}
			</p>
			<p class="text-lg font-medium text-[#555555]">
				<RightArrow /> {{ t("fairs2") }}
			</p>
		</div>
		<div>
			<RedBlockTitle :title="t('permissions')" />
			<h4 class="text-xl font-medium text-[#555555]">
				{{ t("permissionsParagraph") }}
			</h4>
		</div>
	</RedCard>
	<CTA svg="horusEye" />
</template>

<script setup>
import CTA from "@/components/layout/CTA.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
