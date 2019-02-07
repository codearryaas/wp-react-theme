const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './assets/js/src/index.js',
  output: {
    path: path.resolve('./assets/js/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: './assets/js/src/index.html',
  //     filename: './index.html'
  //   })
  // ]
};
