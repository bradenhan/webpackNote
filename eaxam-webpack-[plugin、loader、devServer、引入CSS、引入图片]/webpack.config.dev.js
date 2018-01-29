const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引用html-webpack-plugin 插件
const path = require('path');

module.exports = { // nodeJS 模块化语法
    // 入口文件
    entry: './src/app.js',

    // 输出地方
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js'
    },
    plugins: [ //这里存放插件
      new HtmlWebpackPlugin({ //new 一个HtmlWebpackPlugin实例子
        filename: 'index.html',
        template: './src/index.html'
      })
    ],
    module: {
      rules: [{
          test: /\.js$/,
          use: [{
            loader: "babel-loader",
          }],
          exclude : [//排除某些文件夹 
            path.resolve(__dirname,'node_modules')
          ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader', // 第二布 -- 插入样式到<style></style>结构并插入到body中
            //'css-loader' // 第一步 -- 解析样式
            {
              loader : 'css-loader',
              options : {
                   modules: true, //开启模块化
                   localIdentName : '[path][name]__[local]--[hash:base64:5]'
              }
            }
          ],
          exclude : [//排除某些文件夹（不模块化）
            path.resolve(__dirname,'node_modules'),
            path.resolve(__dirname,'src/common')
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader','css-loader'],
          include : [ // 包含（直解析这里面的文件，其余的CSS模块化处理
            path.resolve(__dirname,'node_modules'),
            path.resolve(__dirname,'src/common')
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader', // 第二布 -- 插入样式到<style></style>结构并插入到body中
            //'css-loader' // 第一步 -- 解析样式
            {
              loader : 'css-loader',
              options : {
                   modules: true, //开启模块化
                   localIdentName : '[path][name]__[local]--[hash:base64:5]'
              }
            },
            'sass-loader'
          ],
          exclude : [//排除某些文件夹（不模块化）
            path.resolve(__dirname,'node_modules'),
            path.resolve(__dirname,'src/common')
          ]
        },
        {
          test: /\.scss$/,
          use: ['style-loader','css-loader','sass-loader'],
          include : [ // 包含（直解析这里面的文件，其余的CSS模块化处理
            path.resolve(__dirname,'node_modules'),
            path.resolve(__dirname,'src/common')
          ]
        },
        {
          test: /\.less$/,
          use: [
            'style-loader', // 第二布 -- 插入样式到<style></style>结构并插入到body中
            //'css-loader' // 第一步 -- 解析样式
            {
              loader : 'css-loader',
              options : {
                   modules: true, //开启模块化
                   localIdentName : '[path][name]__[local]--[hash:base64:5]'
              }
            },
            'less-loader'
          ],
          exclude : [//排除某些文件夹（不模块化）
            path.resolve(__dirname,'node_modules'),
            path.resolve(__dirname,'src/common')
          ]
        },
        {
          test: /\.less$/,
          use: ['style-loader','css-loader','less-loader'],
          include : [ // 包含（直解析这里面的文件，其余的CSS模块化处理
            path.resolve(__dirname,'node_modules'),
            path.resolve(__dirname,'src/common')
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [{
              loader: 'url-loader', //把图片转换成base64格式
              options: {
                limit: 8192 //以b为单位 1kb = 1000b,大于此体积的会图片打包，否则图片会转换成base64
              }
            }]
        },
        {
          test: /\.(eot|woff|ttf|svg|woff2)$/,
          use: [
            'file-loader' // 1. 图片移动到打包目录 2. 图片转换成需要的路径，并且重命名
          ]
        },
        ]
      },
      devServer: {
        open: true, // 自动打开
        port: 9001 // 自定义端口
      }
    }
