import { createApp } from "vue";
import router from "./router/router";
import i18n from "./i18n/i18n";
import { createPinia } from "pinia";

import "./main.css";
import App from "./App.vue";
import RedBlockTitle from "./components/ui/RedBlockTitle.vue";
import RightArrow from "./components/ui/RightArrow.vue";
import BasicButton from "./components/ui/BasicButton.vue";
import RedCard from "./components/ui/RedCard.vue";
import RedHero from "./components/layout/RedHero.vue";

const app = createApp(App);

app.component("RedBlockTitle", RedBlockTitle);
app.component("RightArrow", RightArrow);
app.component("BasicButton", BasicButton);
app.component("RedCard", RedCard);
app.component("RedHero", RedHero);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
