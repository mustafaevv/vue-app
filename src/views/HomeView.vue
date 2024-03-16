<template>
  <div>
    <h1>Home</h1>
    <div class="row" bis_skin_checked="1">
      <div class="loader" v-if="isLoading">
       <Loader/>
      </div>
      <Card
        v-else
        v-for="articles in data"
        :articles="articles"
        :key="articles.id"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Card } from "@/components";
export default {
  components: {
    Card,
  },
  methods: {},
  computed: {
    ...mapState({
      data: (state) => state.articles.data,
      isLoading: (state) => state.articles.isLoading,
      error: (state) => state.articles.error,
    }),
  },
  mounted() {
    this.$store.dispatch("articles");
  },
};
</script>
<style scoped>
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
}
</style>
