/**
 * 路由
 */
const router = require('koa-router')();
const controller = require('../controllers/index')

router.get('/get-ip', async (ctx, next) => {
  ctx.response.type = "application/json";
  let str_ip = "120.229.35.63";

  let result = await controller.getIp(str_ip)
  ctx.response.body = result
})
router.get('/get-ai', async (ctx, next) => {
  ctx.response.type = "application/json";
  let msg = ctx.request.query.msg || ''
  let result = await controller.getAI(msg)
  ctx.response.body = result
})

router.get('/', async (ctx, next) => {

  ctx.response.body = "<h5>智能聊天系统</h5>";
  //   await ctx.render('index', {
  //     title: '智能聊天系统'
  //   })
})

// router.use('/error', error.routes(), error.allowedMethods())

module.exports = router
