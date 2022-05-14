const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'production',
  minimize: true,
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ],
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'client/public'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
};
