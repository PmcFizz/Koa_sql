function hello (ctx) {
  let user = ctx.request.query.user
  ctx.send(201, {user})
}

module.exports = {
  hello
}