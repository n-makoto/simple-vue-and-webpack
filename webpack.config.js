// TODO: 環境変数化
const MODE = 'development'

const path = require('path')

const TerserPlugin = require('terser-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    index: path.join(__dirname, '/src/main.ts')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    open: true,
    port: 8080,
  },
  mode: MODE,
  devtool: 'inline-source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          appendTsSuffixTo: ['\\.vue$']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.ts', '.js', '.vue', '.json']
  },
  plugins: [new VueLoaderPlugin()],
  optimization: {
    minimizer:
      MODE === 'production'
        ? [
          new TerserPlugin({
            terserOptions: {
              ecma: 6,
              parallel: true,
              sourceMap: true,
              warnings: false,
              compress: {
                drop_console: true
              }
            }
          })
        ]
        : []
  },
}