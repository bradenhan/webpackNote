const path = require('path');

module.exports = { // nodeJS 模块化语法
  // 入口文件
  entry : './src/app.js',

  // 输出地方
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
  }
}
