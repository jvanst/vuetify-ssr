module.exports = {
  pluginOptions: {
    ssr: {
      port: 8080,
      defaultTitle: "My app",
      nodeExternalsWhitelist: [/\.css$/, /\?vue&type=style/, /vuetify/]
    }
  },
  lintOnSave: false,
  transpileDependencies: ["vuetify"]
};
