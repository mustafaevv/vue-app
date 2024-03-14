<template>
  <div class="form-floating mt-3">
    <input
      :type="type"
      id="inputEmail"
      class="form-control"
      :placeholder="placeholder"
    />
    <label for="inputEmail" class="sr-only">{{ label }}</label>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: String,
    placeholder: String,
  },
};
</script>
<style></style>
