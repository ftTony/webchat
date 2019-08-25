/**
 * 路由
 */
const router = require("koa-router")();
// const error = require("./error");
// const home = require("./home");
const controller = require("../controllers/index");

router.get("/get-ip", controller.getIp);

router.get("/get-ai", controller.getAI);

router.get("/", async ctx => {
    ctx.response.body = "<h5>智能聊天系统</h5>";
});

// router.use("/", home.routes(), home.allowedMethods());
// router.use("/error", error.routes(), error.allowedMethods());

module.exports = router;
