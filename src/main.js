import { createApp } from "vue";
import { createPinia } from "pinia";
// import dotenv from "dotenv";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// dotenv.config();
const app = createApp(App);

app.use(createPinia());
// app.use(VueRouter);
app.use(router);

app.mount("#app");
