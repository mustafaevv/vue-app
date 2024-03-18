<template>
  <div class="w-50 mt-100 mx-auto">
    <form @submit="editHandle">
      <Input type="text" label="title" v-model="title" />
      <Input type="text" label="description" v-model="description" />
      <TextArea type="text" label="body" v-model="body"></TextArea>
      <Button type="submit">Edit Article</Button>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    initialValue: {
      type: Object,
      required: true,
    },
    editHandle: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      title: this.initialValue.title,
      description: this.initialValue.description,
      body: this.initialValue.body,
    };
  },
  methods: {
    editArticle() {
      const article = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: [],
      };
      editHandle(article);
    },
  },
};
</script>

<style></style>
