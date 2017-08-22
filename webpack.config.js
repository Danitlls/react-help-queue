const webpack = require('webpack');
const { resolve } = require('path');


module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, "src") + "/index.jsx"
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath:'/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: '#source-map',

  devtool: {
    hot: true,
    contentBase: resolve(_dirname, '')
  }

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "es2015",
            "react"
          ]
        }
      },
    ],
  }

};
