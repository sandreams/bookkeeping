const {
  override,
  addWebpackModuleRule,
  overrideDevServer,
} = require('customize-cra')
/**
 * @description: 用户自定义修改 webpack config
 * @param {object} config webpack 的配置
 * @return {object} 修改后的 webpack 配置
 */
const addCustomize = () => (config) => {
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
/**
 * @description: 更改默认 devServer 配置
 * @param {*} config
 * @return {*}
 */
const setDevServerSettings = () => (config) => {
  // console.log("config :>> ", config);
  // Object.assign(config, {
  //   port: 9001,
  // });
  config.port = 9001
  return config
}
module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'remi',
          },
        },
      ],
    }),
    addWebpackModuleRule({
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }),
    addCustomize()
  ),
  // devServer: overrideDevServer(setDevServerSettings()),
}
