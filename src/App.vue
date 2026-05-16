<template>
	<NavBar></NavBar>
	<router-view class="flex-1"></router-view>
	<FooterSection />
</template>

<script setup>
import FooterSection from "./components/layout/FooterSection.vue";
import NavBar from "./components/layout/NavBar.vue";
</script>
