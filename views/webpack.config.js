const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: { path: path.resolve(__dirname, './public'), filename: 'bandle.js' },
  mode: 'development',
  module: {
    // rules: [
    //   {
    //     test: /\.[jt]sx?$/,
    //     use: {
    //       loader: ['babel-loader'],
    //       options: {
    //         presets: ['@babel/preset-env'],
    //       },
    //     },
    //     exclude: '/node_modules/',
    //     include: path.resolve(__dirname, 'src'),
    //   },
    //   {
    //     test: /\.s[ac]ss$/i,
    //     use: [
    //       // Creates `style` nodes from JS strings
    //       'style-loader',
    //       // Translates CSS into CommonJS
    //       'css-loader',
    //       // Compiles Sass to CSS
    //       {
    //         loader: 'sass-loader',
    //         options: {
    //           sourceMap: true,
    //           sassOptions: {
    //             outputStyle: 'compressed',
    //           },
    //         },
    //       },
    //     ],
    //   },
    // ],
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new HtmlWebpackPlugin({ filename: './index.html', template: './src/index.html' })],
  devServer: {
    // contentBase: path.join(__dirname, './public'),
    port: 3000,
    // publicPath: 'http://localhost:3000/dist/',
    // hotOnly: true,
  },
};
