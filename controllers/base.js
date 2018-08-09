const biology = require('../mysql/mysql')

/**
 * 查询所有新闻
 * @param ctx
 * @returns {Promise<void>}
 */
exports.findAllNews = async ctx => {
  await biology.findAllNews().then(res => {
    ctx.body = {
      code: 200,
      data: res
    }
  })
}

/**
 * 查询所有文章
 * @param ctx
 * @returns {Promise<void>}
 */
exports.findAllArticles = async ctx => {
  await biology.findAllArticles().then(res => {
    ctx.body = {
      code: 200,
      data: res
    }
  })
}

/**
 * 查询所有订单
 * @param ctx
 * @returns {Promise<void>}
 */
exports.findAllOrders = async ctx => {
  await biology.findAllOrders().then(res => {
    ctx.body = {
      code: 200,
      data: res
    }
  })
}

/**
 * 查询所有产品
 * @param ctx
 * @returns {Promise<void>}
 */
exports.findAllProducts = async ctx => {
  await biology.findAllProducts().then(res => {
    ctx.body = {
      code: 200,
      data: res
    }
  })
}

/**
 * 查询所有用户
 * @param ctx
 * @returns {Promise<void>}
 */
exports.findAllUsers = async ctx => {
  await biology.findAllUsers().then(res => {
    ctx.body = {
      code: 200,
      data: res
    }
  })
}

/**
 * 查询所有联系
 * @param ctx
 * @returns {Promise<void>}
 */
exports.findAllContacts = async ctx => {
  await biology.findAllContacts().then(res => {
    ctx.body = {
      code: 200,
      data: res
    }
  })
}
