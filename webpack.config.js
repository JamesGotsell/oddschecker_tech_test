var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR   = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders: [
         {
           test: /\.js$/,
           exclude: /(node_modules|bower_components)/,
           loader: 'babel', // 'babel-loader' is also a legal name to reference
           query: {
             presets: ['es2015']
           }
         }
       ]
  }
};

module.exports = config;