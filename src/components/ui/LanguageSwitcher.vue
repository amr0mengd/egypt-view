<template>
	<div class="border-primary flex items-center rounded-sm border text-[8px]">
		<button
			@click="setLang('en')"
			class="bg-primary px-1 py-1.5 font-bold text-white underline">
			EN
		</button>
		<button @click="setLang('jp')" class="px-1 py-1.5">JP</button>
	</div>
</template>

<script setup>
import { ref } from "vue";

const activeLang = ref("en");

function setLang(lang = "en") {
	activeLang.value = lang;
}
</script>
