<template>
  <ul class="list-group">
    <li
      class="list-group-item list-group-item-danger"
      v-for="massage in errorMessages"
      :key="massage"
    >
      {{ massage }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "Validation",
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map((value) => {
        const msg = this.validationErrors[value].join(", ");
        return `${value} ${msg}`;
      });
    },
  },
  updated() {},
};
</script>
<style></style>
