<template>
	<div class="border-primary flex items-center rounded-sm border text-[8px]">
		<button
			@click="setLang('en')"
			class="cursor-pointer px-1 py-1.5"
			:class="{ 'bg-primary font-bold text-white underline': locale === 'en' }">
			EN
		</button>
		<button
			@click="setLang('jp')"
			class="cursor-pointer px-1 py-1.5"
			:class="{ 'bg-primary font-bold text-white underline': locale === 'jp' }">
			JP
		</button>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n({ useScope: "global" });
function setLang(lang) {
	locale.value = lang;
}
</script>
