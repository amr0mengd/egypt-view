<template>
	<RedHero :smallHead="t('ourServices')" :Headline="t('tours&services')" />
	<RedCard>
		<!-- arrangement section -->
		<div class="space-y-2">
			<RedBlockTitle :title="t('toursTitle1')" />
			<div class="space-y-1">
				<h4 class="text-xl text-[#555555]">{{ t("arrangement") }}</h4>
				<div class="space-y-0.5">
					<p class="font-medium"><RightArrow /> {{ t("arrangement1") }}</p>
					<p class="font-medium"><RightArrow /> {{ t("arrangement2") }}</p>
					<p class="font-medium"><RightArrow /> {{ t("arrangement3") }}</p>
				</div>
			</div>
		</div>
		<!-- support section -->
		<div class="space-y-2">
			<RedBlockTitle :title="t('toursTitle2')" />
			<h4 class="text-xl font-medium text-[#555555]">{{ t("support") }}</h4>
		</div>
		<!-- cruise section -->
		<div class="space-y-2">
			<RedBlockTitle :title="t('toursTitle3')" />
			<h4 class="text-xl font-medium text-[#555555]">{{ t("cruise") }}</h4>
		</div>
		<!-- plans section -->
		<div class="space-y-2">
			<RedBlockTitle :title="t('toursTitle4')" />
			<div class="space-y-0.5">
				<p><RightArrow /> {{ t("plans1") }}</p>
				<p><RightArrow /> {{ t("plans2") }}</p>
				<p><RightArrow /> {{ t("plans3") }}</p>
				<p><RightArrow /> {{ t("plans4") }}</p>
				<p><RightArrow /> {{ t("plans5") }}</p>
			</div>
		</div>
		<!-- maniac section -->
		<div class="space-y-2">
			<RedBlockTitle :title="t('toursTitle5')" />
			<h4 class="text-xl font-medium text-[#555555]">{{ t("maniac") }}</h4>
		</div>
	</RedCard>
	<CTA svg="pyramids" />
</template>

<script setup>
import CTA from "@/components/layout/CTA.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
