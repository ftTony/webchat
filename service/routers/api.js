const router = require('koa-router')();

const controller = require('../controllers/index')

module.exports = router.get('/get-ip', (ctx) => {
    ctx.response.type = "application/json"
    let result = await controller.getIp()
    ctx.response.body = result
}).get('/get-ai', async (ctx) => {
    ctx.response.type = "application/json"
    let result = await controller.getAI()
    ctx.response.body = result
})