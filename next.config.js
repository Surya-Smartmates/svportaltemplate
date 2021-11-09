const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);

module.exports ={
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co"],
  },
  env:{
    NEXTAUTH_URL:'http://localhost:3000'
  }
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //     // Note: we provide webpack above so you should not `require` it
  //     // Perform customizations to webpack config
  //     config.plugins.push(
  //         new webpack.ProvidePlugin({
  //             $: "jquery",
  //             jQuery: "jquery",
  //             "window.jQuery": "jquery",
  //         })
  //     );
  //     // Important: return the modified config
  //     return config;
  // },
};

// withImages(withTM())
