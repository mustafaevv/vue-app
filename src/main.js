import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import Layout from "./Layout";
import store from "./vuex";

const app = createApp(App);

Layout.map((component) => app.component(component.name, component));

app.use(store);
app.use(router);
app.mount("#app");
