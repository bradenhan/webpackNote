# 使用babel

[babel](https://babeljs.io)


## 1. 使用 babel-preset-env 配置babel

#### 安装 babel-preset-env 插件
> npm i -D babel-preset-env


#### 修改`webpack.config.dev.js` 文件

    const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引用html-webpack-plugin 插件
    const path = require('path');

    module.exports = {
      entry: './src/app.js',
      output: {
          ...
      },
      plugins: [ // 这里存放插件
          ...
      ],
      module: { // 这里存放loader
          ...
          ,
          {
            test: /\.js$/,
            use: [{
              loader: "babel-loader",
            }],
            exclude : [//排除某些文件夹
              path.resolve(__dirname,'node_modules') // 这里很重要
            ]
          },
          ...

      },
      devServer: { // 这里配置webpack-devServer
          ...
      }
    };

#### 新建`.babelrc`文件
    {
      "presets": ["react","env"],
      "plugins": ["transform-object-rest-spread"]
    }

#### 执行打包命令
> npm run start

#### 执行结果
![](./images/Jietu20180124-003626.jpg)
