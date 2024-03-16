<template>
  <div class="w-50 mt-100 mx-auto">
    <form @submit="createHandle">
      <Input type="text" label="title" v-model="title" />
      <Input type="text" label="description" v-model="description" />
      <TextArea type="text" label="body" v-model="body"></TextArea>
      <Button type="submit" :disabled="isLoading">Create Article</Button>
    </form>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      title: "",
      description: "",
      body: "",
    };
  },
  methods: {
    createHandle(e) {
      e.preventDefault();
      const newArticle = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: [],
      };
      this.$store.dispatch("createArticle", newArticle);
      this.$router.push({name: "home"});
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.controller.isLoading,
    }),
  },
};
</script>
<style></style>
import { computed } from 'vue'; mapState,
