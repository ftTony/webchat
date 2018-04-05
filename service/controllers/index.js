/**
 * 控制器
 */

const request = require("request");

const controllers = {
  // 获取IP地址
  async getIp(ctx) {
    let ip = ctx.ip;
    ip = ip.substring(ip.lastIndexOf("f:") + 2);
    ctx.response.type = "application/json";
    let result = await request({
      url:
        "http://apis.juhe.cn/ip/ipNew?ip=" +
        ip +
        "&key=ed2b36c92c3d48eff07f2fe153fe1ecd"
    });
    ctx.response.body = result;
  },
  // 获取聊天信息
  async getAI(ctx) {
    ctx.response.type = "application/json";
    msg = ctx.request.query.msg || "";
    let result = await request({
      url:
        "http://api.qingyunke.com/api.php?key=free&appid=0&msg=" +
        encodeURI(msg)
    });
    ctx.response.body = result;
  }
};

module.exports = controllers;
