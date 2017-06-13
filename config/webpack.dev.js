const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),

    // new BrowserSyncPlugin(
    //   // BrowserSync options 
    //   {
    //     // browse to http://localhost:3000/ during development 
    //     host: 'localhost',
    //     port: 3000,
    //     // proxy the Webpack Dev Server endpoint 
    //     // (which should be serving on http://localhost:3100/) 
    //     // through BrowserSync 
    //     proxy: 'http://localhost:8080/'
    //   },
    //   // plugin options 
    //   {
    //     // prevent BrowserSync from reloading the page 
    //     // and let Webpack Dev Server take care of this 
    //     reload: false
    //   }
    // )
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
