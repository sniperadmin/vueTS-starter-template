const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack(config) {
    config.plugin('BundleAnalyzerPlugin')
      .use(BundleAnalyzerPlugin)
      .init(Plugin => new Plugin({ token: process.env.BUNDLE_ANALYZER_TOKEN }))
  }
}
