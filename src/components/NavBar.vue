<template>
	<div
		id="navbar"
		class="container mx-auto py-4.25 flex items-center justify-between">
		<div id="logo" class="flex items-center justify-center space-x-2">
			<router-link to="#">
				<img src="../assets/logo.png" class="w-14" />
			</router-link>
			<p class="text-[32px] font-bold text-primary pb-0.5">Egypt-View</p>
		</div>
		<div class="space-x-6 flex items-center">
			<div id="navigation" class="flex space-x-8">
				<nav-item text="Home" :is-active="true"></nav-item>
				<div class="relative">
					<div class="flex items-center" @mouseenter="toggleOpen">
						<nav-item text="Services"></nav-item>
						<span
							class="material-symbols-outlined text-[16px] text-primary align-middle"
							:class="{ 'rotate-180': isOpen }">
							keyboard_arrow_down
						</span>
					</div>
					<DropDown
						:class="{ hidden: !isOpen, block: isOpen }"
						@mouseleave="toggleOpen" />
				</div>
				<nav-item text="Gallery"></nav-item>
				<nav-item text="About"></nav-item>
				<nav-item text="Contact"></nav-item>
			</div>
			<div id="separator" class="w-px h-6 bg-[#D9D9D9] rounded-[5px]"></div>
			<LanguageSwitcher />
		</div>
	</div>
</template>

<script>
import NavItem from "./NavItem.vue";
import LanguageSwitcher from "./LanguageSwitcher.vue";
import DropDown from "./DropDown.vue";
export default {
	components: { NavItem, LanguageSwitcher, DropDown },
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		toggleOpen() {
			this.isOpen = !this.isOpen;
		},
	},
};
</script>
