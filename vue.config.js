const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  productionSourceMap: false,

  transpileDependencies: true,
  lintOnSave: false,

  devServer: {
    port: 3000,
    // 启动后自动打开浏览器
    open: '/'
  }
})
