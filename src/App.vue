<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <div v-if="!isColorEntered" class="header" id="subheader">
    <label class="header" id="label-color" data-test-id="enter-color-label">Enter Color</label>
    <input
      type="text"
      @keyup.enter="handleKeyPress"
      placeholder="enter some color"
      v-model="userColor"
      data-test-id="user-input-field"
    />
    <p v-if="errorMessage" class="error" data-test-id="error-message">{{ errorMessage }}</p>
  </div>

  <div v-else>
    <HeadersForm :message="message" :color="userColor" />
    <button @click="goBack" data-test-id="home-button">Home</button>
  </div>
</template>

<script>
import HeadersForm from "../src/components/HeadersForm.vue";

export default {
  name: "App",
  data() {
    return {
      message: "Hello Uzair's World....",
      userColor: "",
      isColorEntered: false,
      errorMessage: "",
    };
  },
  methods: {
    handleKeyPress: function (e) {
      if (e.key === "Enter" || e.key === " ") {
        if (this.isValidColor(this.userColor)) {
          this.isColorEntered = true;
          this.showError = false;
        } else {
          this.showError = true;
          this.errorMessage =
            "Invalid color entered. Please enter a valid color.";
        }
      }
    },
    isValidColor: function (color) {
      const colorNames =
        "aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen";

      const colorRegex = new RegExp(
        `^(#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|${colorNames})$`,
        "i"
      );

      return colorRegex.test(color);
    },
    goBack: function () {
      this.isColorEntered = false;
      this.userColor = "";
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
