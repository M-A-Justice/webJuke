// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   test: /\.(jpe?g|png|gif|ico)$/i,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'file-loader?name=[name].[ext]',
      //   },
      // },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     favicon: 'src/images/favicon-16x16.png',
  //   }),
  // ],
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
