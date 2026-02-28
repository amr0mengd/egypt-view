import { createApp } from "vue";
import router from "./router/router";
// import { createPinia } from 'pinia'

import "./main.css";
import App from "./App.vue";

const app = createApp(App);

// app.use(createPinia())
app.use(router);

app.mount("#app");
