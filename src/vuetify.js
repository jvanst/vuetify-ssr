import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export function createVuetify() {
  const vuetify = new Vuetify({});

  return vuetify;
}
