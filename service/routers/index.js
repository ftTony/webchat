/**
 * 路由
 */
const router = require('koa-router')();
const controller = require('../controllers/index')

router.get('/get-ip', async (ctx) => {
  ctx.response.type = "application/json";
  let result = await controller.getIp()
  ctx.response.body = result
})

router.get('/get-ai', async (ctx) => {
  ctx.response.type = "application/json"
  let result = await controller.getAI()
  ctx.response.body = result
})

router.get('/', async (ctx) => {
  ctx.response.body = "<h5>智能聊天系统</h5>";
  //   await ctx.render('index', {
  //     title: '智能聊天系统'
  //   })
})

// router.use('/error', error.routes(), error.allowedMethods())

module.exports = router
