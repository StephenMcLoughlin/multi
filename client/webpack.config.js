var path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './index.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
}
