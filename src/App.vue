<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="header" id="subheader">
    <label class="header" id="label-color">Enter Color</label>
    <input
      type="text"
      @keyup.enter="handleKeyPress"
      placeholder="enter some color"
      v-model="inputText"
    />
  </div>

  <HeadersForm  :message="message" :color="colorArray"/>
</template>

<script>
import HeadersForm from "../src/components/HeadersForm.vue";

export default {
  name: "App",
  data() {
    return {
      message: "Hello Uzair's World....",
      inputText: "",
      colorArray: [],
    };
  },
  methods: {
    handleKeyPress: function (e) {
      if (e.key === "Enter" || e.key === " ") {
        if (this.inputText.trim() !== "") {
          this.colorArray.push(this.inputText.trim());
          this.inputText = ""; // Clear the input field
        }
      }
    },
  },
  components: { HeadersForm },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  font-style: normal;
  position: relative;
}
.subheader {
  position: fixed;
  margin-top: 60px;
}
.header span {
  font-style: normal;
}
.header label input {
  position: static;
}
#label-color {
  font-style: normal;
  font-size: 14px;
  margin-right: 5px;
  color: #2c3e50;
}
#input-color {
  font-style: normal;
  font-size: 12px;
  color: #2c3e50;
}
#emoji {
  position: relative;
}
</style>
