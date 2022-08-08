const HtmlWebPack = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  optimization: {},

  plugins: [
    new HtmlWebPack({
      title: 'Mi Webpack App',
      // filename: 'holamundo.html', //opcional
      template: './src/index.html',
    }),
  ],
}
