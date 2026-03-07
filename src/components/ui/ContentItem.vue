<template>
	<div class="flex justify-between h-120" :class="{ 'flex-row-reverse': inverted }">
		<div id="article" class="w-4/12 h-full space-y-4">
			<router-link :to="to">
				<h2 class="text-[40px] font-medium">{{ title }}</h2>
			</router-link>
			<div class="space-y-8">
				<p class="text-xl/[33px]">{{ subTitle }}</p>
				<p class="text-xl font-medium">
					{{ t("forMore") }}
					<router-link :to="to" class="font-bold underline decoration-2">{{
						t("click")
					}}</router-link>
				</p>
			</div>
		</div>
		<div id="image" class="w-6/12" :class="{'pl-4': !inverted, 'pr-4': inverted}">
			<router-link :to="to">
				<img :src="src" class="w-full h-full rounded-2xl" />
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
