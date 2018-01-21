const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引用html-webpack-plugin 插件
const path = require('path');

module.exports = { // nodeJS 模块化语法
  // 入口文件
  entry : './src/app.js',

  // 输出地方
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
  },
  plugins : [ //这里存放插件
      new HtmlWebpackPlugin({ //new 一个HtmlWebpackPlugin实例子
        filename : 'main.html',
        template : './src/index.html'
      })
  ]
}
