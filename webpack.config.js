var webpack = require("webpack")

module.exports = {
  entry: __dirname + "/js/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "webpack.merge.js"
  },
  plugins:[
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "window.jQuery":"jquery"
    })
  ]
}