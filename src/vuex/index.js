import { createStore } from "vuex";

import auth from "@/modules/auth";
import articles from "@/modules/articles";
import controller from "@/modules/controller";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, articles, controller },
});

export default store;
