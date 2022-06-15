const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
// 解决命名问题报错
  runtimeCompiler: true,
  lintOnSave: false  
})
