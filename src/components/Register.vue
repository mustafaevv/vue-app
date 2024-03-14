<template>
  <main class="form-signin w-25 m-auto">
    <form @submit="onSubmitHandler">
      <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      <Input :type="'text'" :label="'Your Name'" :placeholder="'Your Name'" />
      <Input
        :type="'email'"
        :label="'Your Email'"
        :placeholder="'Your Email'"
      />
      <Input :type="'password'" :label="'Password'" :placeholder="'Password'" />
      <Button type="submit" :disabled="isLoading">Register</Button>
    </form>
  </main>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onSubmitHandler(e) {
      e.preventDefault();
      this.$store.commit("setLoading")
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
  },
};
</script>
<style></style>
