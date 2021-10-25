import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./routes/index.js";
import { store } from "./stores/index.js";
import "nprogress/nprogress";

createApp(App).use(router).use(store).mount("#app");
