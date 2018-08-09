const webSites = require('../mysql/mysql')

exports.hello = async ctx => {
  await webSites.findAllWebSites().then(res => {
    ctx.body = {
      code: 200,
      data: res
    }
  })
}