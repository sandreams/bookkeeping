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
  // console.log('config :>> ', config.module)
  return config
}
module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: /\.svg$/,
      use: [
        { loader: 'svg-sprite-loader', options: {} },
        {
          loader: 'svgo-loader',
          options: {
            plugins: [{ removeAttrs: { attrs: 'fill' } }]
          }
        }
      ]
    }),
    addWebpackModuleRule({
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }),
    addCustomize()
  )
}
