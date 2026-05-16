<template>
	<div
		class="sticky top-0 z-20 w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
		<!-- navbar -->
		<div
			class="text-primary container mx-auto flex items-center justify-between py-4">
			<!-- logo -->
			<router-link to="/" class="flex items-center justify-center space-x-2">
				<img src="../../assets/logo.png" class="w-14" />
				<p class="text-[32px] font-bold">{{ t("heading") }}</p>
			</router-link>
			<div class="flex items-center space-x-4">
				<NavItem to="/" :text="t('home')"></NavItem>
				<ServicesDropdown />
				<NavItem to="/gallery" :text="t('gallery')"></NavItem>
				<NavItem to="/about" :text="t('about')"></NavItem>
				<NavItem to="/contact" :text="t('contact')"></NavItem>
				<!-- vertical divider -->
				<div class="h-6 w-px rounded-[5px] bg-[#D9D9D9]"></div>
				<LanguageSwitcher />
			</div>
		</div>
	</div>
</template>

<script setup>
import NavItem from "../ui/NavItem.vue";
import LanguageSwitcher from "../ui/LanguageSwitcher.vue";
import ServicesDropdown from "../ui/ServicesDropdown.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
