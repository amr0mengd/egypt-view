import { createApp } from "vue";
import router from "./router/router";
import i18n from "./i18n/i18n";
import { createPinia } from "pinia";

import "./main.css";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
