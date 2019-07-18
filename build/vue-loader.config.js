module.exports = (isDev) => {
  return {
    preserveWhitespace: true, // 处理忽略vue文件template中空格
    extractCSS: !isDev // 单独打包vue文件中的stylus(开发环境不需要单独打包)
    // cssModules: {
    //   localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
    //   camelCase: true
    // }
  }
}
