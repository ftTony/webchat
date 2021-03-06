/**
 * 请求第三方API
 */

const request = require("request")

module.exports = {
  // 获取IP地址
  async getIp() {
    let ip = "120.229.35.63";
    return await request({
      url: "http://apis.juhe.cn/ip/ipNew?ip=" +
        ip +
        "&key=ed2b36c92c3d48eff07f2fe153fe1ecd"
    })
  },
  // 获取聊天信息
  async getAI(ctx) {
    let msg = ctx.request.query.msg || ''
    return await request({
      url: 'http://api.qingyunke.com/api.php?key=free&appid=0&msg=' + encodeURI(msg)
    })
  }
}
