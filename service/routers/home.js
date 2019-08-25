const router = require('koa-router')();
const controller = require('../controllers');

module.exports = router.get('/', async (ctx, next) => {
    ctx.response.body = "<h5>智能聊天系统</h5>";
}).get('/get-ip', controller.getIp).get('/get-ai', controller.getAI);
