const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const BodyParser = require('koa-bodyparser')
const opn = require('opn')
const Helmet = require('koa-helmet')
const respond = require('koa-respond')
const port = process.env.PORT || 3000
const app = new Koa()
const router = new Router()
app.use(Helmet())

if (process.env.NODE_ENV === 'development') {
  app.use(Logger())
}

app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '2mb',
  strict: true,
  onerror: (err, ctx) => {
    ctx.throw('body parase error', 422)
  }
}))

app.use(respond())
app.use(require('./routes/users.js').routes())
app.use(router.allowedMethods())

app.listen(port, () => {
  opn(`http://localhost:${port}`)
  console.log('服务已正常启动,请开始你的表演,访问地址' + `http://localhost:${port}`)
})