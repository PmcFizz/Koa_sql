const Router = require('koa-router')
const router = new Router()
const Base = require('../controllers/base')
router.prefix('/biology')
router.get('/findAllNews', Base.findAllNews)
router.get('/findAllArticles', Base.findAllArticles)
router.get('/findAllOrders', Base.findAllOrders)
router.get('/findAllProducts', Base.findAllProducts)
router.get('/findAllUsers', Base.findAllUsers)
router.get('/findAllContacts', Base.findAllContacts)

module.exports = router