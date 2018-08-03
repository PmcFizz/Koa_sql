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
const mysql = require('mysql')
app.use(Helmet())

if (process.env.NODE_ENV === 'development') {
  app.use(Logger())
}

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   database: 'test'
// })
//
// connection.connect()
// let sql = 'SELECT * FROM websites'
//
// connection.query(sql, function (err, res) {
//   if (!err) {
//     console.log('************')
//     console.log(res)
//     console.log('************')
//   }
// })
// connection.end()
app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '2mb',
  strict: true,
  onerror: (err, ctx) => {
    ctx.throw('body parase error', 422)
  }
}))

app.use(respond())
require('./routes')(router)
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port, () => {
  opn(`http://localhost:${port}`)
  console.log('服务已正常启动,请开始你的表演,访问地址' + `http://localhost:${port}`)
})