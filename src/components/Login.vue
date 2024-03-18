<template>
  <main class="form-signin w-25 m-auto">
    <form @submit="onSubmitHandler">
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <Validation
        :validationErrors="validationErrors"
        v-if="validationErrors"
      />
      <Input
        :type="'text'"
        :label="'Email address'"
        :placeholder="'Email address'"
        v-model="email"
      />
      <Input
        :type="'password'"
        :label="'Password'"
        :placeholder="'Password'"
        v-model="password"
      />
      <Button type="submit" :disabled="isLoading">Login</Button>
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
        .dispatch("login", newUser)
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
