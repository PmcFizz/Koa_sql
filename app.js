const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const BodyParser = require('koa-bodyparser')
const opn = require('opn')
const Helmet = require('koa-helmet')
const cors = require('koa2-cors')
const respond = require('koa-respond')
const port = process.env.PORT || 3000
const app = new Koa()
const router = new Router()
app.use(Helmet())

if (process.env.NODE_ENV === 'development') {
  app.use(Logger())
}
//  跨域请求
app.use(cors({
  origin: function (ctx) {
    // if (ctx.url === '/test') {
      // return "*"; // 允许来自所有域名请求
    // }
      return 'http://localhost:8000'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '2mb',
  strict: true,
  onerror: (err, ctx) => {
    ctx.throw('body parase error', 422)
  }
}))

app.use(respond())
app.use(require('./routes/base.js').routes())
app.use(router.allowedMethods())

app.listen(port, () => {
  // opn(`http://localhost:${port}`)
  console.log('服务已正常启动,请开始你的表演,访问地址' + `http://localhost:${port}`)
})