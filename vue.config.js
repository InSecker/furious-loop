module.exports = {
  pwa: {
    name: "Furious Track",
    short_name: "FT",
    themeColor: "#2C3950",
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
