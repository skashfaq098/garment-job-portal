import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";
import App from "./App.vue";
import './assets/plugins/bootstrap/bootstrap-grid.min.css'
import './assets/plugins/bootstrap/bootstrap-utilities.min.css'
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

createApp(App).use(plugin, defaultConfig, store).use(router).mount("#app");
