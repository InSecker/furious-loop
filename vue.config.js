module.exports = {
  pwa: {
    name: "Oh My Food",
    short_name: "OMF",
    themeColor: "#F8FC3B",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      display: "fullscreen",
    },
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js",
    },
  },
};
