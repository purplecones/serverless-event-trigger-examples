var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    'babel-polyfill',
    './handler.js'
  ],
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         loader: 'babel', // 'babel-loader' is also a valid name to reference
         query: {
           presets: ['es2015']
         }
       }
    ]
  }
};
