var webpack = require("webpack");
var path = require("path");

module.exports = {
    "entry": __dirname + "/src/js/index.js",
    "output": {
        "path": __dirname + "/dist",
        "filename": "bundle.js"
    },
    "module": {
        "loaders": [
            {
                "test": /\.js$/,
                "exclude": /(node_modules)/,
                "loader": "babel-loader",
                "query": {
                    "cacheDirectory": "babel-cache"
                }
            }
        ]
    },
    plugins: [
    new webpack.ProvidePlugin({
      "fetch": "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch",
      "Promise": "promise-polyfill"
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}