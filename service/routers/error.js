const router = require('koa-router')();

module.exports = router.get('*', async (ctx) => {
    ctx.response.body = '<h2>页面出错了</h2>'
});