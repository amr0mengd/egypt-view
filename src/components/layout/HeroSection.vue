<template>
	<div>
		<div id="heroText & CTA's" class="flex">
			<div id="hero article">
				<h1>{{ t("heroTitle") }}</h1>
				<p>{{ t("heroSubtitle") }}</p>
			</div>
			<div id="CTA's">
				<BasicButton to="/about">About Us</BasicButton>
				<BasicButton to="/contact" :inverted="true">Book Now</BasicButton>
			</div>
		</div>
		<div id="heroImage" class="rounded-xl">
			<router-link to="#"><img src="../../assets/hero.jpg" alt="camel" /></router-link>
		</div>
	</div>
</template>

<script setup>
import BasicButton from "../ui/BasicButton.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
