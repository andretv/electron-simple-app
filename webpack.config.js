const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(path.join(__dirname, 'screens/index.js')),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
}