<template>
	<div class="relative" @mouseleave="toggleOpen">
		<div class="flex items-center" @mouseenter="toggleOpen">
			<p class="text-[16px]">{{ t("services") }}</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 -960 960 960"
				class="fill-primary w-5">
				<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
			</svg>
		</div>
		<div
			:class="{ hidden: !isDropdownOpen }"
			class="absolute left-1/2 flex -translate-x-1/2 cursor-pointer flex-col rounded-xl bg-white text-center text-xs text-nowrap drop-shadow-lg">
			<router-link
				to="/tours"
				class="hover:bg-primary w-full rounded-t-xl p-2 hover:text-white"
				>{{ t("tours") }}</router-link
			>
			<router-link
				to="/translation"
				class="hover:bg-primary w-full cursor-pointer p-2 hover:text-white"
				>{{ t("translation") }}</router-link
			>
			<router-link
				to="/brand"
				class="hover:bg-primary w-full cursor-pointer p-2 hover:text-white"
				>{{ t("brand") }}</router-link
			>
			<router-link
				to="/events"
				class="hover:bg-primary w-full cursor-pointer rounded-b-xl p-2 hover:text-white"
				>{{ t("events") }}</router-link
			>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const isDropdownOpen = ref(false);
const { t } = useI18n();

function toggleOpen() {
	isDropdownOpen.value = !isDropdownOpen.value;
}
</script>
