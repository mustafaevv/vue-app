<template>
  <div class="form-floating mt-3">
    <input
      class="form-control"
      :type="type"
      :id="label"
      :placeholder="label"
      @input="onUpdatedInput"
      :value="modelValue"
    />
    <label :for="label" class="sr-only">{{ label }}</label>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: String,
    modelValue: [String, Number],
  },
  methods: {
    onUpdatedInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
<style></style>
