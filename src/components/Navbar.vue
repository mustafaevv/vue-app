<template>
  <div
    class="d-flex justify-content-between align-items-center p-3 px-md-4 mb-3"
    bis_skin_checked="1"
  >
    <RouterLink class="text-dark text-decoration-none" to="/"> Logo </RouterLink>
    <nav class="my-2 my-md-0 mr-md-3">
      <RouterLink class="p-2 text-dark text-decoration-none" :to="{ name: 'login' }">
        Login
      </RouterLink>
      <RouterLink class="p-2 text-dark text-decoration-none" :to="{ name: 'register' }">
        Register
      </RouterLink>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
