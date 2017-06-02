var path = require('path');

module.exports = {
  entry: {
    app: ['./app/index.js', './app/console.js'],
    vendors: './app/vendors.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
