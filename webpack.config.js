const path = require('path');


module.exports = {
  mode: 'development',
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        use: [  // 'use' is like loader but receives an array
          'style-loader', 
          'css-loader',
          'sass-loader'
        ], 
        test: /\.s?css$/
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};