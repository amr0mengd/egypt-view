import { createRouter, createWebHashHistory } from "vue-router";

// this import method loads every imported component initially
import HomePage from "@/pages/HomePage.vue";

// lazy router component can be used to only load the component when the user visits it not initially
// that can improve the app as it doesn't have to load all components initially
// const HomePage = ()=> import("../pages/HomePage.vue")

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			redirect: "/home",
		},
		{
			name: "home",
			path: "/home",
			component: HomePage,
		},
	],
});

export default router;
