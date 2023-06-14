const path = require("path");

module.exports = {
  devServer:{
    static:{
      directory:path.resolve(__dirname, 'dist')
    },
    compress:true
  },
  entry:{
    index: './src/index.js'
  },
  mode: 'production',
  module:{
    rules:[{
     test:/\.js$/,
     use: ['babel-loader'] 
    }]
  },
  output:{
    filename:'[name].min.js'
  }
}