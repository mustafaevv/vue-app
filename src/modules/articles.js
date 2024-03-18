import ArticlesService from "@/service/articles";

const state = {
  data: null,
  isLoading: false,
  error: null,
  articleDetail: null,
};

const mutations = {
  getArticlesStart(state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
    state.articleDetail = null;
  },
  getArticlesSuccess(state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  getArticlesFailure(state) {
    state.isLoading = false;
  },

  // ArticleDetail

  getArticleDetailStart(state) {
    state.isLoading = true;
    state.articleDetail = null;
    state.error = null;
    state.data = null;
  },
  getArticleDetailSuccess(state, payload) {
    state.isLoading = false;
    state.articleDetail = payload;
  },
};

const actions = {
  articles(context) {
    return new Promise((resole, reject) => {
      context.commit("getArticlesStart");
      ArticlesService.articles()
        .then((response) => {
          context.commit("getArticlesSuccess", response.data.articles);
          resole(response.data.articles);
        })
        .catch(() => context.commit("getArticlesFailure"));
    });
  },
  articleDetail(context, slug) {
    return new Promise((resolve) => {
      context.commit("getArticleDetailStart");
      ArticlesService.articlesDetail(slug)
        .then((response) => {
          context.commit("getArticleDetailSuccess", response.data.article);
          resolve(response.data.article);
        })
        .catch(() => context.commit("getArticlesFailure"));
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
