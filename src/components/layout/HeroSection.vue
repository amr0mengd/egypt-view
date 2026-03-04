<template>
	<div id="heroSection" class="container mx-auto flex h-165 space-x-8 pt-16 pb-18">
		<div id="heroText & CTA's" class="w-4/12 space-y-28">
			<div id="hero article" class="space-y-9 pt-12">
				<h1 class="text-[64px]/[100%] font-bold">{{ t("heroTitle") }}</h1>
				<p class="font-normal text-[22px]/[33px]">{{ t("heroSubtitle") }}</p>
			</div>
			<div id="CTA's" class="space-x-6">
				<BasicButton to="/about">About Us</BasicButton>
				<BasicButton to="/contact" :inverted="true">Book Now</BasicButton>
			</div>
		</div> 
		<div id="heroImage" class="h-full w-8/12">
			<router-link to="#" class="block h-full"
				><img class="h-full w-full rounded-xl object-cover" src="../../assets/hero.jpg" alt="camel"
			/></router-link>
		</div>
	</div>
</template>

<script setup>
import BasicButton from "../ui/BasicButton.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
