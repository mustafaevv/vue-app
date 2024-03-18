import ArticlesService from "@/service/articles";

const state = {
  isLoading: false,
};

const mutations = {
  controllerArticleStart(state) {
    state.isLoading = true;
  },
  controllerArticleSuccess(state) {
    state.isLoading = false;
  },
  controllerArticleFailure(state) {
    state.isLoading = false;
  },
};

const actions = {
  createArticle(context, payload) {
    return new Promise(() => {
      context.commit("controllerArticleStart");
      ArticlesService.createArticle(payload)
        .then(() => context.commit("controllerArticleSuccess"))
        .catch(() => context.commit("controllerArticleFailure"));
    });
  },
  deleteArticle(context, slug) {
    return new Promise((resolve) => {
      context.commit("controllerArticleStart");
      ArticlesService.deleteArticle(slug)
        .then(() => {
          context.commit("controllerArticleSuccess");
          resolve();
        })
        .catch(() => context.commit("controllerArticleFailure"));
    });
  },
  updateArticle(context, data) {
    return new Promise((resolve) => {
      context.commit("controllerArticleStart");
      ArticlesService.updateArArticle(data.article, data.slug)
        .then(() => {
          context.commit("controllerArticleSuccess");
          resolve();
        })
        .catch(() => context.commit("controllerArticleFailure"));
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
