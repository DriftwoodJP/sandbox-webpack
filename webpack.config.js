var path = require('path');

module.exports = {
  entry: {
    app: ['./app/index.js', './app/console.js'],
    vendors: './app/vendors.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
