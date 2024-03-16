<template>
  <div v-if="article" class="row block">
    <div class="col-12">
      <h5>{{ article.title }}</h5>
    </div>
    <div class="col-8">
      <p class="opacity-75">Description</p>
      <p class="text-color font-monospace text-capitalize">{{ article.description }}</p>
    </div>
    <div class="col-2">
      <p class="opacity-75">Created at:</p>
      <p class="text-color font-monospace">
        {{ new Date(article.createdAt).toLocaleDateString("us") }}
      </p>
    </div>
    <div class="col-2">
      <p class="opacity-75">Updated at:</p>
      <p class="text-color font-monospace">
        {{ new Date(article.updatedAt).toLocaleDateString("us") }}
      </p>
    </div>
    <div class="col-4">
      <p class="opacity-75">Author</p>
      <div class="d-flex align-items-center gap-3">
        <div
          class="d-flex align-items-center justify-content-center"
          style="
            width: 60px;
            height: 60px;
            border-radius: 100%;
            background: black;
          "
        >
          <p class="text-light m-0 fw-bold">{{ article.author.username[0] }}</p>
        </div>
        <div>
          {{ article.author.username }}
        </div>
      </div>
    </div>
    <div class="col-8">
      <p class="text-color">Body:</p>
      <p class="text-color">
        {{ article.body }}
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      article: (state) => state.articles.articleDetail,
    }),
  },
};
</script>
<style scoped>
.block {
  margin-top: 50px;
}
</style>
