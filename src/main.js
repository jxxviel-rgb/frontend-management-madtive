import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./routes/index.js";
import { store } from "./stores/index.js";
import "nprogress/nprogress";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import "moment/locale/id";
import moment from "moment";
moment.locale("id");

library.add(faCircleNotch);
createApp(App).use(router).use(store).mount("#app");
