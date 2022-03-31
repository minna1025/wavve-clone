const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/base/_variables.scss";
        `,
      },
    },
  },
  configureWebpack: ({ resolve }) => {
    const { alias } = resolve;
    alias["@"] = path.resolve(__dirname, "src");
    alias["@views"] = path.resolve(__dirname, "src/views");
    alias["@components"] = path.resolve(__dirname, "src/components");
    alias["@layout"] = path.resolve(__dirname, "src/components/layout");
  },
});
