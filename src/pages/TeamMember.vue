<template>
	<RedHero
		class="min-h-120"
		:smallHead="t('ourTeam')"
		:Headline="t('meetOurTeam')"
		:img="true" />
	<!-- hekmat shimadzu page -->
	<div class="container mx-auto space-y-18 pt-8">
		<RedCard>
			<!-- hekmat's photo & name -->
			<div class="flex items-center space-x-8">
				<img
					src="../assets/hekmat.jpg"
					class="border-primary h-45 w-45 rounded-full border-2 object-cover"
					alt="Hekmat's photo" />
				<div class="space-y-4">
					<h1 class="text-[40px] leading-10 font-semibold tracking-[-0.9px]">
						{{ t("team1") }}
					</h1>
					<div
						class="bg-primary/10 border-primary w-fit rounded-full border-2 px-2 py-1">
						<p class="text-primary text-[16px] leading-4.75 font-medium">
							{{ t("role") }}
						</p>
					</div>
				</div>
			</div>
			<!-- workExperience section -->
			<div class="space-y-2">
				<RedBlockTitle :title="t('workExperience')" />
				<div>
					<p class="text-xl leading-8 text-[#555555]">
						<RightArrow /> {{ t("exp1") }}
					</p>
					<p class="text-xl leading-8 text-[#555555]">
						<RightArrow /> {{ t("exp2") }}
					</p>
					<p class="text-xl leading-8 text-[#555555]">
						<RightArrow /> {{ t("exp3") }}
					</p>
					<p class="text-xl leading-8 text-[#555555]">
						<RightArrow /> {{ t("exp4") }}
					</p>
				</div>
			</div>
			<!-- education section -->
			<div class="space-y-2">
				<RedBlockTitle :title="t('education')" />
				<div class="space-y-3">
					<!-- nihon university -->
					<div class="space-y-1">
						<h1 class="text-primary text-xl leading-7 font-semibold">
							{{ t("nihon") }}
						</h1>
						<p class="text-[16px] text-[#555555]">{{ t("nihonParagraph") }}</p>
					</div>
					<!-- waseda university -->
					<div class="space-y-1">
						<h1 class="text-primary text-xl leading-7 font-semibold">
							{{ t("waseda") }}
						</h1>
						<p class="text-[16px] text-[#555555]">{{ t("wasedaParagraph") }}</p>
					</div>
					<!-- GIA university -->
					<div class="space-y-1">
						<h1 class="text-primary text-xl leading-7 font-semibold">
							{{ t("gia") }}
						</h1>
						<p class="text-[16px] text-[#555555]">{{ t("giaParagraph") }}</p>
					</div>
				</div>
			</div>
			<!-- articles section -->
			<div class="space-y-2">
				<RedBlockTitle :title="t('articles')" />
				<div class="space-y-1">
					<div>
						<a
							href="https://taptrip.jp/writer/714/"
							target="_blank"
							class="text-primary text-xl font-semibold underline"
							>{{ t("art1") }}</a
						>
					</div>
					<p class="text-[18px] text-[#555555]">{{ t("art1Paragraph") }}</p>
				</div>
			</div>
			<!-- websites section -->
			<div class="space-y-2">
				<RedBlockTitle :title="t('websites')" />
				<div class="space-y-2">
					<!-- first website link-->
					<div class="space-y-1">
						<div>
							<a
								href="https://ameblo.jp/greenwood-bluemoon/"
								target="_blank"
								class="text-primary text-xl font-semibold underline"
								>{{ t("website1") }}</a
							>
						</div>
						<p class="text-[18px] text-[#555555]">
							{{ t("website1Paragraph") }}
						</p>
					</div>
					<!-- second website link -->
					<div class="space-y-1">
						<div>
							<a
								href="https://world-walker.jugem.jp/"
								target="_blank"
								class="text-primary text-xl font-semibold underline"
								>{{ t("website2") }}</a
							>
						</div>
						<p class="text-[18px] text-[#555555]">
							{{ t("website2Paragraph") }}
						</p>
					</div>
				</div>
			</div>
		</RedCard>
		<!-- back to about button -->
		<div class="my-12 text-center">
			<BasicButton :inverted="true" class="border-primary border-2" to="/about"
				><span class="inline-block scale-x-[-1]">&#10140;</span> Back to
				team</BasicButton
			>
		</div>
		<!-- CTA section -->
		<CTA svg="sphinx" />
	</div>
</template>

<script setup>
import CTA from "@/components/layout/CTA.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
