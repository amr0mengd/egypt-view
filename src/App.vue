<template>
	<div class="shadow-[0_2px_10px_rgba(0,0,0,0.05)] sticky top-0">
		<NavBar class="w-full bg-white"></NavBar>
	</div>
	<router-view></router-view>
  <FooterSection/>
</template>

<script setup>
import FooterSection from "./components/layout/FooterSection.vue";
import NavBar from "./components/layout/NavBar.vue";
</script>
