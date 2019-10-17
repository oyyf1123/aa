const path = require('path')

module.exports = {
  // 详情见  webpack 中文网站的文档
  entry: path.join(__dirname,'../src/index.js'),//入口文件配置
  output: {   // 出口文件配置
    path: path.join(__dirname, '../build'),
    filename:'js/app.[hash:6].js'   //将来在build 目录下   js.app.js
  },
  mode:'development',
  module: {
    rules: [
      {
        test: /\.css$/,  //匹配整个项目下的.css文件
        use:['style-loader','css-loader']  // 使用css-loader来处理css文件
      }
    ]
  },
  devServer: {
    hot: true,
    open:true,
  }
}