<template>
	<div class="relative" @mouseleave="toggleOpen">
		<div class="flex items-center" @mouseenter="toggleOpen">
			<NavItem text="Services"></NavItem>
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
				to="#"
				class="hover:bg-primary w-full rounded-t-xl p-2 hover:text-white"
				>Tours</router-link
			>
			<router-link
				to="#"
				class="hover:bg-primary w-full cursor-pointer p-2 hover:text-white"
				>Translation</router-link
			>
			<router-link
				to="#"
				class="hover:bg-primary w-full cursor-pointer p-2 hover:text-white"
				>Original Brand</router-link
			>
			<router-link
				to="#"
				class="hover:bg-primary w-full cursor-pointer rounded-b-xl p-2 hover:text-white"
				>Events & Research</router-link
			>
		</div>
	</div>
</template>

<script setup>
import NavItem from "./NavItem.vue";
import { ref } from "vue";

const isDropdownOpen = ref(false);

function toggleOpen() {
	isDropdownOpen.value = !isDropdownOpen.value;
}
</script>
