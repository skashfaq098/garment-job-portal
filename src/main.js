import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

createApp(App).use(plugin, defaultConfig, store).use(router).mount("#app");
