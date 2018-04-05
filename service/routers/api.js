const router = require("koa-router")();

const controller = require("../controllers/index");

module.exports = router
  .get("/get-ip", controller.getIp)
  .get("/get-ai", async ctx => {
    ctx.response.type = "application/json";
    let result = await controller.getAI(ctx);
    ctx.response.body = result;
  });
