const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack(config) {
    config.plugin('BundleAnalyzerPlugin')
      .use(BundleAnalyzerPlugin)
      .init(Plugin => new Plugin({ token: 'a576f29fffe7ff995f90fd98b47e0dad48760bcb' }))
  }
}
