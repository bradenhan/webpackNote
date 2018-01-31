# 使用less和scss

sass-loader node-sass

#### 安装 sass-loader node-sass 插件
> npm i -D sass-loader node-sass

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

          // 平常用
          ,{
            test : /\.scss$/,
            use : [ 'style-loader','css-loader','sass-loader']
          },

          // 模块化
          {
            test : /\.scss$/,
            use : [
              'style-loader',
              {
                loader : 'css-loader',
                options : {
                     modules: true, //开启模块化
                     localIdentName : '[path][name]__[local]--[hash:base64:5]'
                }
              },
              'sass-loader'
            ]
          },

      },
      devServer: { // 这里配置webpack-devServer
          ...
      }
    };

#### 修改`app.js`文件

    import React from 'react';
    import ReactDOM from 'react-dom';

    // 引入sass文件
    import  './common/style/main.scss';

    import  main from './common/style/main.scss'; //模块化


    ReactDOM.render(
        <div>
        React ussssssde <br />
        <span className="a">收拾收拾
        </span>< br/>
        <em className={style.ox}>sss</em> < br/>
        <span className="fa fa-rocket">sss</span>
        </div>,
        document.getElementById('root')
    );



#### 执行打包命令

> npm run start

#### 执行结果
![](./images/Jietu20180121-224833.jpg)


# 使用less

less 和 sass 使用十分类似

less-loader less

#### 安装 less-loader 插件
> npm i -D less-loader less
