const { override, addWebpackModuleRule } = require('customize-cra')

// 打包配置
const addCustomize = () => config => {
  console.log('打印环境 :>> ', process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'production') {
    // 生产环境
    // 关闭sourceMap
    config.devtool = false
  } else {
    // 开发环境
  }

  return config
}
module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: /\.svg$/,
      use: [
        { loader: 'svg-sprite-loader', options: {} },
        { loader: 'svgo-loader', options: {} }
      ]
    }),
    addCustomize()
  )
}
