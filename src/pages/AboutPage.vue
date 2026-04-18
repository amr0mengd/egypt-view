<template>
	<div id="about page" class="space-y-8 pb-10">
		<div id="hero image" class="h-128 w-full shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
			<img
				src="../assets/aboutHero.png"
				class="h-full w-full object-cover object-bottom"
				alt="Temple" />
		</div>
		<div id="about content" class="space-y-18">
			<div id="headline pills cards" class="container mx-auto space-y-18">
				<div id="hero title" class="space-y-4 text-center">
					<p class="text-primary text-sm font-medium tracking-[2px]">
						{{ t("who") }}
					</p>
					<h2 class="text-[40px] leading-12 font-semibold">
						{{ t("aboutEgyptView") }}
					</h2>
					<RedDivider justify="center" />
					<p class="mx-auto max-w-161 text-[20px] leading-8 font-medium text-[#555555]">
						{{ t("aboutParagraph") }}
					</p>
				</div>
				<div id="pills" class="mx-auto flex max-w-328 flex-wrap justify-center space-x-1">
					<RedPill :pillText="t('pill1')" svg="pyramid" />
					<RedPill :pillText="t('pill2')" svg="college" />
					<RedPill :pillText="t('pill3')" svg="crossedFlags" />
					<RedPill :pillText="t('pill4')" svg="package" />
					<RedPill :pillText="t('pill5')" svg="globe" />
					<RedPill :pillText="t('pill6')" svg="bi" />
				</div>
				<div id="mission & vision" class="flex space-x-6">
					<div id="vision card" class="bg-primary relative space-y-4 rounded-2xl px-8 py-6 text-white/90">
            <IconSVG name="quote" class=" absolute bottom-0"/>
						<h2 class="text-[36px] font-medium">{{ t("ourVision") }}</h2>
						<RedDivider color="white" />
						<p class="text-xl">{{ t("vision") }}</p>
					</div>
					<div
						id="mission card"
						class="bg-primary/10 border-primary space-y-4 rounded-2xl border-[1.5px] px-8 py-6">
						<h2 class="text-primary text-[36px] font-medium">{{ t("ourMission") }}</h2>
						<RedDivider />
						<p class="text-xl text-[#555555]"><RightArrow /> {{ t("mission1") }}</p>
						<p class="text-xl text-[#555555]"><RightArrow /> {{ t("mission2") }}</p>
						<p class="text-xl text-[#555555]"><RightArrow /> {{ t("mission3") }}</p>
					</div>
				</div>
			</div>
			<div id="team" class="bg-primary/10 w-full space-y-6 py-16">
				<div id="title" class="space-y-4">
					<p class="text-primary text-center text-sm font-medium tracking-[2px]">
						{{ t("ourPeople") }}
					</p>
					<h2 class="text-center text-[40px] font-semibold">{{ t("meetOurTeam") }}</h2>
					<RedDivider justify="center" />
				</div>
				<div id="team card" class="mx-auto flex max-w-272.5 rounded-2xl bg-white px-8 py-6 shadow-[0_2px_10px_rgba(0,0,0,0.10)]">
					<div id="initials" class="flex w-1/2 items-center justify-center">
						<h2
							class="bg-primary flex h-30 w-30 items-center justify-center rounded-full text-7xl font-medium text-white">
							HS
						</h2>
					</div>
					<div id="description" class="flex w-1/2 flex-col space-y-5">
						<h2 class="text-[32px] font-semibold">{{ t("team1") }}</h2>
						<div class="space-y-3">
							<div class="bg-primary/10 border-primary w-fit py-1 px-2 rounded-full border-2">
								<p class="text-primary text-[16px] font-medium leading-4.75">{{ t("role") }}</p>
							</div>
							<p class="text-[16px] font-medium text-[#555555]">{{ t("roleDescription") }}</p>
							<div class="flex w-full justify-end">
								<BasicButton class="text-[16px]">Learn More →</BasicButton>
							</div>
						</div>
					</div>
				</div>
			</div>
      <CTA svg="camel" class="container mx-auto"/>
		</div>
	</div>
</template>

<script setup>
import IconSVG from "@/components/ui/IconSVG.vue";
import CTA from "@/components/layout/CTA.vue";
import BasicButton from "@/components/ui/BasicButton.vue";
import RedDivider from "@/components/ui/RedDivider.vue";
import RedPill from "@/components/ui/RedPill.vue";
import RightArrow from "@/components/ui/RightArrow.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
