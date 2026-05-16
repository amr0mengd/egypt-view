<template>
	<div class="relative">
		<div v-if="isDropdownOpen" @click="toggleOpen" class="fixed inset-0 z-10" />
		<div class="flex items-center hover:cursor-pointer" @click="toggleOpen">
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
			class="absolute left-1/2 z-20 flex -translate-x-1/2 cursor-pointer flex-col rounded-xl bg-white text-center text-xs text-nowrap drop-shadow-lg">
			<router-link
				@click="toggleOpen"
				to="/tours"
				class="hover:bg-primary w-full rounded-t-xl p-2 hover:text-white"
				>{{ t("tours") }}</router-link
			>
			<router-link
				@click="toggleOpen"
				to="/translation"
				class="hover:bg-primary w-full cursor-pointer p-2 hover:text-white"
				>{{ t("translation") }}</router-link
			>
			<router-link
				@click="toggleOpen"
				to="/brand"
				class="hover:bg-primary w-full cursor-pointer p-2 hover:text-white"
				>{{ t("brand") }}</router-link
			>
			<router-link
				@click="toggleOpen"
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

const { t } = useI18n();
const isDropdownOpen = ref(false);

function toggleOpen() {
	isDropdownOpen.value = !isDropdownOpen.value;
}
</script>
