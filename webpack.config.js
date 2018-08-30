const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({ path: '.env.development' });

module.exports = env => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('main.css');

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'public/assets/'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
              },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract],
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      publicPath: '/assets/',
      port: 3001,
      historyApiFallback: true,
    },
    resolve: {
      modules: [path.resolve('./src'), path.resolve('./node_modules')],
    },
  };
};
