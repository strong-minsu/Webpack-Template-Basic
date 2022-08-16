module.exports = {
  //일일이 명시해야하는 js를 한 번에 묶어주는 패키지
  presets: ['@babel/preset-env'],
  //비동기 처리를 위한 패키지
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}