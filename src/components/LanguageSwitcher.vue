<template>
	<div class="text-[8px] flex items-center h-6">
		<button
			@click="setLang('en')"
			class="px-1 py-1.5 border border-primary bg-primary rounded-l-sm text-white underline font-bold">
			EN
		</button>
		<button
			@click="setLang('jp')"
			class="px-1 py-1.5 border border-primary rounded-r-sm">
			JP
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeLang: "en",
		};
	},
	methods: {
		setLang(lang = "en") {
			this.activeLang = lang;
		},
	},
};
</script>
