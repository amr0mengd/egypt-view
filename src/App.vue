<template>
	<div class="shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
		<NavBar class="w-full"></NavBar>
	</div>
	<router-view></router-view>
</template>

<script setup>
import NavBar from "./components/layout/NavBar.vue";
</script>
