const Koa = require("koa");
const IO = require("koa-socket-2");
const koaStatic = require("koa-static");
const bodyParser = require("koa-bodyparser");
// const router = require("koa-router")();
const routers = require("./routers/index");
// const request = require("request");
// const send = require('koa-send');
const path = require("path");
const app = new Koa();

const io = new IO({
  ioOptions: {
    pingTimeout: 10000,
    pingInterval: 5000
  }
});

// router.get("/get-ip", async (ctx, next) => {
//   ctx.response.type = "application/json";
//   let str_ip = "120.229.35.63";

//   let result = await getIp(str_ip)
//   ctx.response.body = result
// });

// async function getIp(ip) {
//   let response = await request({
//     url: "http://apis.juhe.cn/ip/ipNew?ip=" +
//       ip +
//       "&key=ed2b36c92c3d48eff07f2fe153fe1ecd"
//   })
//   return response
// }

// async function getAI(msg) {
//   let response = await request({
//     url: 'http://api.qingyunke.com/api.php?key=free&appid=0&msg=' + encodeURI(msg)
//   })
//   return response
// }

// router.get('/get-ai', async (ctx, next) => {
//   ctx.response.type = "application/json"
//   let msg = ctx.request.query.msg || ''
//   let result = await getAI(msg)
//   ctx.response.body = result
// })

// router.get("/", async (ctx, next) => {
//   ctx.response.body = "<h5>智能聊天系统</h5>";
// });

app.use(routers.routes()).use(routers.allowedMethods());

const SESSION_CONFIG = {
  key: "koa:sess",
  /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true,
  /** (boolean) automatically commit headers (default true) */
  overwrite: true,
  /** (boolean) can overwrite or not (default true) */
  httpOnly: true,
  /** (boolean) httpOnly or not (default true) */
  signed: true,
  /** (boolean) signed or not (default true) */
  rolling: false,
  /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false
  /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

// 注入应用
io.attach(app);

io.on("connection", socket => {
  // console.log(socket)
  // 群聊
  socket.on("sendGroupMsg", function(data) {
    socket.broadcast.emit("receiveGroupMsg", data);
  });

  // 上线
  socket.on("online", name => {
    socket.broadcast.emit("online", name);
  });
});

app.use(koaStatic(path.join(__dirname, "../public")));
app.use(bodyParser());
// app.use(koaSession(SESSION_CONFIG))
app.proxy = true;
app.listen(9090, () => {
  console.log("listening on *:9090");
});
