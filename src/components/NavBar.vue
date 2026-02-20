<template>
	<div
		id="navbar"
		class="text-primary container mx-auto flex items-center justify-between py-4">
		<router-link
			to="#"
			id="logo"
			class="flex items-center justify-center space-x-2">
			<img src="../assets/logo.png" class="w-14" />
			<p class="text-[32px] font-bold">Egypt View</p>
		</router-link>
		<div class="flex items-center space-x-4">
			<NavItem text="Home" :isActive="true"></NavItem>
			<ServicesDropdown />
			<NavItem text="Gallery"></NavItem>
			<NavItem text="About"></NavItem>
			<NavItem text="Contact"></NavItem>
			<div id="divider" class="h-6 w-px rounded-[5px] bg-[#D9D9D9]"></div>
			<LanguageSwitcher />
		</div>
	</div>
</template>

<script setup>
import NavItem from "./NavItem.vue";
import LanguageSwitcher from "./LanguageSwitcher.vue";
import ServicesDropdown from "./ServicesDropdown.vue";
</script>
