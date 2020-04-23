import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
import { createVuetify } from "./vuetify";

import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

export async function createApp({
  beforeApp = () => {},
  afterApp = () => {}
} = {}) {
  const router = createRouter();
  const vuetify = createVuetify();

  await beforeApp({
    router,
    vuetify
  });

  const app = new Vue({
    router,
    vuetify,
    render: h => h(App)
  });

  const result = {
    app,
    router,
    vuetify
  };

  await afterApp(result);

  return result;
}
