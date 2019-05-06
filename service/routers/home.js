const router = require('koa-router')();

module.exports = router.get('/', async (ctx, next) => {
    ctx.response.body = "<h5>智能聊天系统</h5>";
})