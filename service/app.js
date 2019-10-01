const Koa = require('koa');
const IO = require('koa-socket-2');
const koaSend = require('koa-send');
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');
const koaSession = require('koa-session');
const Busboy = require('busboy');


const app = new Koa();

const io = new IO({
    ioOptions: {
        pingTimeout: 10000,
        pingInterval: 5000
    }
});

const SESSION_CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};


// 注入应用
io.attach(app)

io.on('connection', (socket) => {
    // console.log(socket)
    // 群聊
    socket.on('sendGroupMsg', function (data) {
        socket.broadcast.emit('receiveGroupMsg', data);
    });

    // 上线
    socket.on('online', name => {
        socket.broadcast.emit('online', name)
    });
})

app.use(koaSend)
app.use(koaStatic)
app.use(bodyParser)
app.use(Busboy)
// app.use(koaSession(SESSION_CONFIG))

app.listen(9090, () => {
    console.log('listening on *:9090');
})