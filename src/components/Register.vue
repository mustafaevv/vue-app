<template>
  <main class="form-signin w-25 m-auto">
    <form @submit="onSubmitHandler">
      <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      <Validation
        v-if="validationErrors"
        :validationErrors="validationErrors"
      />
      <Input
        :type="'text'"
        :label="'Your Name'"
        :placeholder="'Your Name'"
        v-model="username"
      />
      <Input
        :type="'email'"
        :label="'Your Email'"
        :placeholder="'Your Email'"
        v-model="email"
      />
      <Input
        :type="'password'"
        :label="'Password'"
        :placeholder="'Password'"
        v-model="password"
      />

      <Button type="submit" :disabled="isLoading">Register</Button>
    </form>
  </main>
</template>
<script>
import { mapState } from "vuex";

import Validation from "@/components/Validation.vue";
export default {
  components: {
    Validation,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmitHandler(e) {
      e.preventDefault();
      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("register", newUser)
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(() => {});
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
      validationErrors: (state) => state.auth.errors,
    }),
  },
};
</script>
<style></style>

<!--  tekkin tekkin@gmail.com  1--0 -->
