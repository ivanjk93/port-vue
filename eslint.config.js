import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        setTimeout: "readonly",
        IntersectionObserver: "readonly"
      },
    },
    plugins: {
      vue,
    },
    rules: {
      ...vue.configs["vue3-recommended"].rules,
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];
