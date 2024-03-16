<template>
  <div v-if="isLoading" class="loader">
    <Loader />
  </div>
  <template v-else>
    <CardItem />
  </template>
</template>
<script>
import { mapState } from "vuex";
import CardItem from "@/components/CardItem.vue";
export default {
  components: {
    CardItem,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.articles.isLoading,
    }),
  },
  mounted() {
    this.$store.dispatch("articleDetail", this.$route.params.slug);
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
