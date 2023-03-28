const proxy = require('http-proxy-middleware')

module.exports = function(app){
  app.use(
    proxy.createProxyMiddleware('/api',{
      target: 'http://localhost:5050/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}