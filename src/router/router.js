import { createRouter, createWebHashHistory } from "vue-router";

// this import method loads every imported component initially
import HomePage from "@/pages/HomePage.vue";

// lazy router component can be used to only load the component when the user visits it not initially
// that can improve the app as it doesn't have to load all components initially
// const HomePage = ()=> import("../pages/HomePage.vue")
const GalleryPage = () => import("../pages/GalleryPage.vue");
const AboutPage = () => import("../pages/AboutPage.vue");
const ContactPage = () => import("../pages/ContactPage.vue");
const ToursPage = () => import("../pages/services pages/ToursPage.vue");
const TranslationPage = () =>
	import("../pages/services pages/TranslationPage.vue");
const BrandPage = () => import("../pages/services pages/BrandPage.vue");
const EventsPage = () => import("../pages/services pages/EventsPage.vue");
const TeamMember = () => import("../pages/TeamMember.vue");

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			name: "home",
			path: "/",
			component: HomePage,
		},
		{
			name: "gallery",
			path: "/gallery",
			component: GalleryPage,
		},
		{
			name: "about",
			path: "/about",
			component: AboutPage,
		},
		{
			name: "team",
			path: "/team",
			component: TeamMember,
		},
		{
			name: "contact",
			path: "/contact",
			component: ContactPage,
		},
		{
			name: "tours",
			path: "/tours",
			component: ToursPage,
		},
		{
			name: "translation",
			path: "/translation",
			component: TranslationPage,
		},
		{
			name: "brand",
			path: "/brand",
			component: BrandPage,
		},
		{
			name: "events",
			path: "/events",
			component: EventsPage,
		},
	],
});

export default router;
