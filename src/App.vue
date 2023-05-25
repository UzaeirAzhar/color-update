<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <div v-if="!isColorEntered">
    <label class="input-label" data-test-id="enter-color-label"
      >Enter Color</label
    >
    <input
      class="input-field"
      type="text"
      ref="userColor"
      @keyup.enter="handleKeyPress"
      placeholder="enter some color"
      v-model="userColor"
      data-test-id="user-input-field"
    />
    <p v-if="showError" class="error-message" data-test-id="error-message">
      {{ errorMessage }}
    </p>
  </div>

  <div v-else>
    <HeadersForm :message="message" :color="userColor" @goBack="goBack" />
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
      showError: false,
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
          this.userColor = "";
          this.errorMessage =
            "Invalid color entered. Please enter a valid color.";
          setTimeout(() => {
            this.showError = false;
            this.errorMessage = "";
          }, 3000);
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
      this.setFocusOnInputField();
    },
    setFocusOnInputField: function () {
      this.$nextTick(() => {
        this.$refs.userColor.focus();
      });
    },
  },
  mounted() {
    if (!this.showError) {
      this.setFocusOnInputField();
    }
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
.input-label {
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
}
.input-field {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.error-message {
  margin-top: 8px;
  padding: 8px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
}
</style>
