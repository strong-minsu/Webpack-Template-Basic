//기본적인 구성 옵션을 정리하는 파일
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
//export
module.exports = {
  //parcel index.html
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  //결과물(Bundle)을 반환하는 곳 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: "main.js",
    clean: true
  },

  module:{
    rules:[
      {
        test:/\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          //webpack의 babel패키지 해석을 위해
          'babel-loader'
        ]
      }
    ]
  },

  plugins : [
    new HtmlPlugin({
      template: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
        {from : 'static'}
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}