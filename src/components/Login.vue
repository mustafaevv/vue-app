<template>
  <main class="form-signin w-25 m-auto">
    <form>
      <img
        class="mb-4"
        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <Input
        :type="'text'"
        :label="'Email address'"
        :placeholder="'Email address'"
      />
      <Input :type="'password'" :label="'Password'" :placeholder="'Password'" />
      <Button type="submit"> Login </Button>
    </form>
  </main>
</template>
<script>
export default {};
</script>
<style></style>
