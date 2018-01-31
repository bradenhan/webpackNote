# webpack-publicPath

## publicPath

`publicPath` -- 所有资源的基础路径，值必须以‘/’结尾。在所有打包后的资源前面引用加上publicPath的值

- **output 里面配置**

      // 输出地方
      output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'js/app.js',
        publicPath : '/'  
      },

- **devServer**

      devServer: {
        open: true, // 自动打开
        port: 9001, // 自定义端口
        contentBase : './src/common', // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
        publicPath : '/' //服务器打包资源后输出路径，相当于output的path
      }

  启动devServer后资源会打包到内存中，不会放到本地目录中，devServer会从内存中查找打包的内容，不仅如此，devServer还会从本地项目目录中查找内容（如果从内容中找不到打包内容，则会到本地目录中查找）。

  [devServer.contentBase](https://doc.webpack-china.org/configuration/dev-server/)

  取值范围：
    - boolean
    - string
    - array  

  告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。

  默认情况下，将使用当前工作目录作为提供内容的目录，但是你可以修改为其他目录：

  > contentBase: path.join(__dirname, "public")
  注意，推荐使用绝对路径。

  但是也可以从多个目录提供内容：

  > contentBase: [path.join(__dirname, "public"), path.join(__dirname, "assets")]

  ###### 禁用 contentBase：
  > contentBase: false

  ###### Usage via the CLI

  > webpack-dev-server --content-base /path/to/content/dir
