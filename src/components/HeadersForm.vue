<template>
  <div class="header" :style="{ color: color }" data-test-id="style-field">
    <h1 data-test-id="colored-message">{{ message }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>