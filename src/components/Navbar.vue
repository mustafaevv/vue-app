<template>
  <div
    class="d-flex justify-content-between align-items-center p-3 px-md-4 mb-3"
    bis_skin_checked="1"
  >
    <a class="text-dark text-decoration-none" @click="toHomePage"> Logo </a>
    <nav class="my-2 my-md-0 mr-md-3">
      <template v-if="isLoggedIn">
        <RouterLink
          class="p-2 text-dark text-decoration-none"
          :to="{ name: 'home' }"
        >
          {{ user.username }}
        </RouterLink>

        <RouterLink
          class="p-2 text-dark text-decoration-none"
          :to="{ name: 'create-article' }"
          >create-article</RouterLink
        >
        <a
          @click="logout"
          class="p-2 text-dark text-decoration-none"
          href="/logout"
          >Logout</a
        >
      </template>
      <template v-if="!isLoggedIn">
        <RouterLink
          class="p-2 text-dark text-decoration-none"
          :to="{ name: 'login' }"
        >
          Login
        </RouterLink>
        <RouterLink
          class="p-2 text-dark text-decoration-none"
          :to="{ name: 'register' }"
        >
          Register
        </RouterLink>
      </template>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { gettersType } from "@/modules/types";
export default {
  methods: {
    toHomePage() {
      return this.$router.push({ name: "home" });
    },
    logout() {
      return this.$store.dispatch("logout");
    },
  },
  computed: {
    ...mapGetters({
      user: gettersType.user,
      isLoggedIn: gettersType.isLoggedIn,
      isAnonymous: gettersType.isAnonymous,
    }),
  },
};
</script>
<style scoped></style>
