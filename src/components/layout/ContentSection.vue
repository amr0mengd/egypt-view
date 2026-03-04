<template>
	<h1 class="py-2.5 text-center text-5xl font-medium">{{ t("servicesHeading") }}</h1>
	<div class="container mx-auto py-12 space-y-18">
		<ContentItem
			:title="t('toursTitle')"
			:subTitle="t('toursSubtitle')"
			to="/tours"
			:src="toursImg" />
		<ContentItem
			:title="t('interpretationsTitle')"
			:subTitle="t('interpretationsSubtitle')"
			to="/translation"
			:src="interpretationsImg"
			:inverted="true" />
		<ContentItem
			:title="t('eventsTitle')"
			:subTitle="t('eventsSubtitle')"
			to="/events"
			:src="eventsImg" />
		<ContentItem
			:title="t('souvenirsTitle')"
			:subTitle="t('souvenirsSubtitle')"
			to="/brand"
			:src="souvenirsImg"
			:inverted="true" />
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import ContentItem from "../ui/ContentItem.vue";
import toursImg from "../../assets/tours.png";
import interpretationsImg from "../../assets/interpretations.png";
import eventsImg from "../../assets/events.png";
import souvenirsImg from "../../assets/souvenirs.jpg";
const { t } = useI18n();
</script>
