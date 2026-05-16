<template>
	<div
		class="flex h-120 justify-between"
		:class="{ 'flex-row-reverse': inverted }">
		<!-- paragraph section -->
		<div class="h-full w-4/12 space-y-3" :class="{ 'w-6/12': inverted }">
			<div class="w-fit">
				<router-link :to="to">
					<h2
						class="hover:text-primary text-[40px] font-medium hover:underline">
						{{ title }}
					</h2>
				</router-link>
			</div>
			<div class="space-y-8">
				<p class="text-xl/[33px]" :class="{ 'w-1/2': inverted }">
					{{ subTitle }}
				</p>
				<p class="text-xl font-medium">
					{{ t("forMore") }}
					<router-link :to="to" class="font-bold underline decoration-2">{{
						t("click")
					}}</router-link>
				</p>
			</div>
		</div>
		<!-- image section -->
		<div class="w-6/12" :class="{ 'pl-4': !inverted, 'pr-4': inverted }">
			<router-link :to="to">
				<img :src="src" class="h-full w-full rounded-2xl" />
			</router-link>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

defineProps({
	title: {
		type: String,
		required: true,
	},
	subTitle: {
		type: String,
		required: true,
	},
	to: {
		type: String,
		required: true,
	},
	src: {
		type: String,
		required: true,
	},
	inverted: {
		type: Boolean,
		default: false,
	},
});

const { t } = useI18n();
</script>
