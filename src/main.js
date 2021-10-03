import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "@popperjs/core";
import router from "./routes";
import { store } from "./stores";
const app = createApp(App).use(router).use(store).mount("#app");
