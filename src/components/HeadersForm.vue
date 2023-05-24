<template>
  <div class="header" :style="{ color: color }">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: Array,
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