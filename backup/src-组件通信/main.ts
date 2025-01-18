import { createApp } from "vue";
import App from "./App.vue";
import { router } from "@/router";
import { createPinia } from "pinia";
const pinia = createPinia();

// import emitter from "./utils/emitter";

const app = createApp(App);
app.use(pinia);
app.use(router);

app.mount("#app");
