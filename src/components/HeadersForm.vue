<template>
  <div
    class="message-page"
    :style="{ color: color }"
    data-test-id="style-field"
  >
    <h1 class="message-text" data-test-id="colored-message">{{ message }}</h1>
  </div>
  <button
    class="home-button"
    @click="$emit('goBack')"
    data-test-id="home-button"
  >
    Home
  </button>
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
  emits: ["goBack"],
};
</script>

<style scoped>
.message-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.message-text {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}
.home-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3366cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.home-button:hover {
  background-color: #235daa;
}
</style>

<!-- .home-button {
  padding: 8px 16px;
  height: 40px; /* Adjust the height as needed */
  line-height: 24px; Adjust the line-height as needed
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.home-button:hover {
  background-color: #0056b3;
} -->