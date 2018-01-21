# webpack实用性基础教程 -- webpack-devServer

webpack-devServer

#### 安装 webpack-dev-server 插件
> npm i -D webpack-dev-server

#### `package.json` 插件位置

    {
        ...
      "scripts": {
        ...
        "start": "webpack-dev-server --config webpack.config.dev.js" // 添加 webpack-dev-server 配置文件
      },
      ...
    }

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
      },
      devServer: {
          open: true, // 自动打开
          port: 9000 // 自定义端口
      }
    };

#### 执行打包命令

> npm run start

#### 执行结果
![](./images/Jietu20180121-224833.jpg)
