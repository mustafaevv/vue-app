<template>
  <div class="container">
    <Navbar />
    <RouterView />
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import { Navbar } from "@/components/";
export default {
  components: {
    Navbar,
  },
  mounted() {
    this.$store.dispatch("getUser");
  },
};
</script>
<style></style>
