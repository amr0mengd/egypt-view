<template>
	<RedHero :smallHead="t('getInTouch')" :Headline="t('contactUs')" />
	<RedCard class="container mx-auto">
		<div class="flex space-x-16">
			<div id="let's talk" class="w-full">
				<RedBlockTitle :title="t('talk')" />
				<form @submit.prevent>
					<label for="name">{{ t('yourName') }}</label>
					<input type="text" name="name" :placeholder="t('name')" class="w-full bg-white" />
					<label for="email">{{ t('emailAddress') }}</label>
					<input type="email" name="email" :placeholder="t('emailExample')" class="w-full bg-white">
					<label for="message">{{ t('message') }}</label>
					<textarea name="message" :placeholder="t('yourMessage')" class="w-full bg-white"></textarea>
          <button >Send Message</button>
				</form>
			</div>
			<div id="info" class="w-full">
				<RedBlockTitle :title="t('contactInfo')" />
			</div>
		</div>
	</RedCard>
</template>

<script setup>
import RedHero from "@/components/layout/RedHero.vue";
import RedBlockTitle from "@/components/ui/RedBlockTitle.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
