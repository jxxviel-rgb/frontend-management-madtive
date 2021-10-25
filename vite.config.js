import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: ["es2020", "edge88", "firefox78", "chrome87"],
  },
  vite: {
    optimizeDeps: {
      exclude: ["vue-phone-mask-input"],
    },
  },
});
