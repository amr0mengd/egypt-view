<template>
	<!-- home page hero -->
	<div class="container mx-auto flex h-165 space-x-8 pt-16 pb-18">
		<!-- heroTitle and CTA's -->
		<div class="w-4/12 space-y-28">
			<!-- hero title and paragraph -->
			<div class="space-y-9 pt-12">
				<h1 class="text-[64px]/[100%] font-bold">{{ t("heroTitle") }}</h1>
				<p class="text-[22px]/[33px] font-normal">{{ t("heroSubtitle") }}</p>
			</div>
			<!-- CTA buttons -->
			<div class="space-x-6">
				<BasicButton to="/about">{{ t("CTA1") }}</BasicButton>
				<BasicButton to="/contact" :inverted="true">{{
					t("CTA2")
				}}</BasicButton>
			</div>
		</div>
		<!-- heroImage -->
		<div class="h-full w-8/12">
			<img
				class="h-full w-full rounded-xl object-cover"
				src="../../assets/hero.jpg"
				alt="camel" />
		</div>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
