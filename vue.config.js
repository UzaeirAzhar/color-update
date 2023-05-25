const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === 'production' ? '/color-update-project/' : '/',
  transpileDependencies: true
})
