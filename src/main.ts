import { createApp } from "vue";
import App from "./App.vue";
import { getStore, storeKey } from "@/store/index";

createApp(App).provide(storeKey, getStore()).mount("#app");
