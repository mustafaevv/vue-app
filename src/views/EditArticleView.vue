<template>
  <ArticleForm
    v-if="article"
    :initialValue="initialValue"
    :editHandle="editHandle"
  />
</template>
<script>
import { mapState } from "vuex";
import { ArticleForm } from "@/components/";
export default {
  components: { ArticleForm },
  computed: {
    ...mapState({
      article: (state) => state.articles.articleDetail,
    }),
    initialValue() {
      return {
        title: this.article.title,
        description: this.article.description,
        body: this.article.body,
      };
    },
  },
  mounted() {
    this.$store.dispatch("articleDetail", this.$route.params.slug);
  },
  methods: {
    editHandle(article) {
      this.$store
        .dispatch("updateArticle", {
          article: article,
          slug: this.$route.params.slug,
        })
        .then(() => {
          this.$router.push("/");
        });
    },
  },
};
</script>
<style></style>
