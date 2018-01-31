# webpack - CSS模块化

CSS模块化 -- 把类名转换成另一种代码

> **loader 处理顺序-- 从右往左优先级，从后往前执行顺序**

## 1. 使用 css-loader 引用CSS

#### 安装 css-loader 插件
> npm i -D css-loader


#### 修改`webpack.config.dev.js` 文件

    ...

    module.exports = {
      entry: './src/app.js',
      output: {
          ...
      },
      plugins: [ // 这里存放插件
          ...
      ],
      module: { // 这里存放loader
        rules: [{
            ...
          ,{
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
            include : [ // 包含（直解析这里面的文件，其余的CSS模块化处理）
              path.resolve(__dirname,'node_modules'),
              path.resolve(__dirname,'src/common')
            ]
          },
          ...
        ]

      },
      devServer: { // 这里配置webpack-devServer
          ...
      }
    };

#### 修改`app.js`文件

    import React from 'react';
    import ReactDOM from 'react-dom';  

    // import  app from  './common/style/app.css';  // 注意写法
    // import  style from  './common/style/main.css';  // 注意写法

    import 'font-awesome/css/font-awesome.css'

    import style from './main.css'

    ReactDOM.render(
        <div>
        React ussssssde <br />
        <span className="ot">收拾收拾
        </span>< br/>
        <em className={style.ox}>sss</em> < br/>
        <span className="fa fa-rocket">sss</span>
        </div>,
        document.getElementById('root')
    );



#### 执行打包命令
> npm run start

#### 执行结果
![](./images/Jietu20180124-003626.jpg)
