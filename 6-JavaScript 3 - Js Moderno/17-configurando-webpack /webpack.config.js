const path = require('path');

module.exports = {
  entry:{
    index: './src/index.js',
    hello: './src/index.js',
  },
  output:{
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.min.js'
  },
  mode: 'development'
}