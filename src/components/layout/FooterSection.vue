<template>
	<div>
		<hr class="text-primary bg-primary h-0.5" />
	</div>
	<div class="w-full bg-primary/10">
		<div id="footer" class="mx-72 flex h-60 justify-around">
			<div id="footer logo" class="flex h-full flex-col items-center justify-center space-y-8">
				<router-link to="#"><img src="../../assets/logo.png" width="120px" alt="" /></router-link>
				<p class="text-primary text-center text-[22px]">{{ t("footerLogo") }}</p>
			</div>
			<div id="links" class="flex justify-center space-x-28 py-8 text-xl">
				<div id="social links" class="space-y-7">
					<h3 class="text-[22px] font-bold text-[#6B6B6B]">{{ t("social") }}</h3>
					<ul class="space-y-3">
						<li class="hover:text-primary hover:underline active:text-white">
							<a target="_blank" href="https://www.facebook.com/Egypt.View.tourism/">{{
								t("facebook")
							}}</a>
						</li>
						<li class="hover:text-primary hover:underline active:text-white">
							<a target="_blank" href="https://x.com/egypt_view">{{ t("twitter") }}</a>
						</li>
						<li class="hover:text-primary hover:underline active:text-white">
							<a
								target="_blank"
								href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@egypt-view.com"
								>{{ t("mail") }}</a
							>
						</li>
					</ul>
				</div>
				<div id="company links" class="space-y-7">
					<h3 class="text-[22px] font-bold text-[#6B6B6B]">{{ t("company") }}</h3>
					<ul class="space-y-3">
						<li class="hover:text-primary hover:underline active:text-white">
							<router-link to="/about">{{ t("CTA1") }}</router-link>
						</li>
						<li class="hover:text-primary hover:underline active:text-white">
							<router-link to="/contact">{{ t("contact") }}</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
