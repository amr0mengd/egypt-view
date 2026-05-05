<template>
	<RedHero :smallHead="t('getInTouch')" :Headline="t('contactUs')" />
	<RedCard class="container mx-auto pt-8 pb-14">
		<div class="flex space-x-16">
			<div id="let's talk" class="w-full space-y-6">
				<RedBlockTitle :title="t('talk')" />
				<form @submit.prevent class="space-y-4">
					<ContactForm
						id="name"
						type="text"
						:label="t('yourName')"
						:placeholder="t('name')" />
					<ContactForm
						id="emailAddress"
						type="email"
						:label="t('emailAddress')"
						:placeholder="t('emailExample')" />
					<ContactForm
						id="message"
						type="textarea"
						:label="t('message')"
						:placeholder="t('yourMessage')" />
					<button
						class="bg-primary w-full rounded-2xl py-3 text-lg font-medium text-white hover:cursor-pointer hover:shadow-md">
						Send Message
					</button>
				</form>
			</div>
			<div id="info" class="w-full space-y-6">
				<RedBlockTitle :title="t('contactInfo')" />
				<div class="space-y-6">
					<h2 class="mb-0.5 text-[16px] font-semibold tracking-[0.7px]">
						{{ t("addressTitle") }}
					</h2>
					<p class="text-primary font-medium">{{ t("address") }}</p>
					<h2 class="mb-0.5 text-[16px] font-semibold tracking-[0.7px]">
						{{ t("emailUs") }}
					</h2>
					<p class="text-primary font-medium">{{ t("egyptViewEmail") }}</p>
					<div class="space-y-0.5">
						<h2 class="text-[16px] font-semibold tracking-[0.7px]">
							{{ t("callUs") }}
						</h2>
						<p class="text-primary font-medium">{{ t("firstNumber") }}</p>
						<p class="text-primary font-medium">{{ t("secondNumber") }}</p>
						<p class="text-primary font-medium">{{ t("thirdNumber") }}</p>
						<p class="text-primary font-medium">{{ t("fourthNumber") }}</p>
					</div>
					<h2 class="mb-0.5 text-[16px] font-semibold tracking-[0.7px]">
						{{ t("whatsapp") }}
					</h2>
					<p class="text-primary font-medium">{{ t("whatsappNumber") }}</p>
				</div>
			</div>
		</div>
	</RedCard>
</template>

<script setup>
import ContactForm from "@/components/ui/ContactForm.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
