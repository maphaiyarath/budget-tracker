const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "production",
  entry: {
    app: "./public/index.js"
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  plugins: [
    new WebpackPwaManifest({
      // the name of the generated manifest file
      filename: "manifest.json",
      // set fingerprints to `false` to make the names of the generated
      // files predictable making it easier to refer to them in our code
      fingerprints: false,
      // we aren't using webpack to generate our html so we set inject to false
      inject: false,
      name: "Budget Tracker",
      short_name: "Budget Tracker",
      description: "An application to track your budget",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      start_url: "/",
      display: "standalone",
      icons: [{
        src: path.resolve(__dirname, "public/icons/icon-512x512.png"),
        sizes: [192, 512],
        destination: path.join("icons")
      }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config;