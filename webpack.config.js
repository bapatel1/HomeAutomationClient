var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var debug = process.env.NODE_ENV !== "production";
var DashboardPlugin = require('webpack-dashboard/plugin');

var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  debug: debug ? true : false,
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    'polyfills': './src/app/polyfills',
    'app': './src/app/boot',
    'vendor': './src/app/vendor'
  },

  output: {
    path: __dirname + '/build/',
    //publicPath: 'build/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['','.ts','.js','.jsx','.json', '.css', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude:/(node_modules|releases)/
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: ['./src/index.html']
      },
      {
        test: /\.scss$/,
        //loader: 'style-loader!css-loader!sass-loader'
        loader: 'raw-loader!sass-loader'
      }
    ]
  },

  plugins: debug ? [
      //dev
      new DashboardPlugin(),
      new CommonsChunkPlugin({ names: ['vendor', 'app', 'polyfills', 'common'], minChunks: Infinity, filename: '[name].js' }),
      new CopyWebpackPlugin([
        { from: './src/static',                   to: 'static' },
        { from: './src/config',                   to: 'config' },
        // Include pre-built packages from npm
        { from: './node_modules/bootstrap/dist',   to: 'lib/bootstrap' },
        { from: './node_modules/jquery/dist',      to: 'lib/jquery' },
        { from: './node_modules/angular2-ui-switch',      to: 'lib/angular2-ui-switch' },
      ]),

      new HtmlWebpackPlugin({
        template: 'src/index.html',
        chunksSortMode: 'dependency',
        filename: 'index.html',
      })

  ] : [
      //prod
      new CommonsChunkPlugin({ names: ['vendor', 'app', 'polyfills', 'common'], minChunks: Infinity, filename: '[name].js' }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({mangle:false, sourcemap:false})
  ],
  target:'web'
};
