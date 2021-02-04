const path = require('path')

module.exports = {
  mode: 'production',
  target: ['web', 'es5'],
  entry: {
    index: path.join(__dirname, '/src/index.ts')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}