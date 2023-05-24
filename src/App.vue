<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="header" :style="{ backgroundColor: colorArray }">
    <h1>{{ message }}</h1>
    <!-- <div class="header" id="emoji">
      <span>{{ emoji }}</span>
    </div> -->

    <div class="header" id="subheader">
      <label class="header" id="label-color">Choose some color</label>
      <input
        type="text"
        @keyup.enter="handleKeyPress"
        placeholder="enter some color"
        v-model="inputText"
      />
    </div>
    {{ colorArray }}
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello Uzair's World....",
      emoji: "",
      inputText: "",
      colorArray: [],
    };
  },
  mounted() {
    // this.printEmoji();
  },
  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    // printEmoji: function () {
    //   const messageLength = this.message.length;
    //   const emoji = "😉";
    //   let counter = 0;
    //   const interval = setInterval(() => {
    //     if (counter < messageLength) {
    //       this.emoji += emoji;
    //       counter++;
    //     } else {
    //       clearInterval(interval);
    //     }
    //   }, 500); // Delay between each emoji in milliseconds
    // },
    handleKeyPress: function (e) {
      if (e.key === "Enter" || e.key === " ") {
        if (this.inputText.trim() !== "") {
          this.colorArray.push(this.inputText.trim());
          this.inputText = ""; // Clear the input field
        }
      }
    },
  },
  components: {},
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
