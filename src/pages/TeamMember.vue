<template>
	<div id="heroSection"><img src="" alt="" /></div>
	<div id="Content" class="container mx-auto space-y-18 pt-8 pb-10">
		<RedCard>
			<div id="photo&name" class="flex items-center space-x-8">
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
			<div id="workExperience" class="space-y-2">
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
			<div id="Education" class="space-y-2">
				<RedBlockTitle :title="t('education')" />
				<div class="space-y-3">
					<div id="nihon" class="space-y-1">
						<h1 class="text-primary text-xl leading-7 font-semibold">
							{{ t("nihon") }}
						</h1>
						<p class="text-[16px] text-[#555555]">{{ t("nihonParagraph") }}</p>
					</div>
					<div id="waseda" class="space-y-1">
						<h1 class="text-primary text-xl leading-7 font-semibold">
							{{ t("waseda") }}
						</h1>
						<p class="text-[16px] text-[#555555]">{{ t("wasedaParagraph") }}</p>
					</div>
					<div id="gia" class="space-y-1">
						<h1 class="text-primary text-xl leading-7 font-semibold">
							{{ t("gia") }}
						</h1>
						<p class="text-[16px] text-[#555555]">{{ t("giaParagraph") }}</p>
					</div>
				</div>
			</div>
			<div id="Articles" class="space-y-2">
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
			<div id="websites" class="space-y-2">
				<RedBlockTitle :title="t('websites')" />
				<div class="space-y-2">
					<div id="website1" class="space-y-1">
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
					<div id="website2" class="space-y-1">
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
			<div id="coverage" class="space-y-2">
				<RedBlockTitle :title="t('coverage')" />
				<div class="space-y-2">
					<div
						class="flex w-full items-center space-x-4 rounded-2xl bg-white p-4"></div>
					<div
						class="flex w-full items-center space-x-4 rounded-2xl bg-white p-4"></div>
				</div>
			</div>
		</RedCard>
		<div id="BackButton" class="text-center">
			<BasicButton :inverted="true" class="border-primary border-2" to="/about"
				><span class="inline-block scale-x-[-1]">&#10140;</span> Back to
				team</BasicButton
			>
		</div>
		<div id="CTA section">
			<CTA svg="sphinx" />
		</div>
	</div>
</template>

<script setup>
import CTA from "@/components/layout/CTA.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
