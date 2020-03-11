module.exports = {
  devServer: {
    port: 8888,
    open: true
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/wechat/'
  : '/'
}
