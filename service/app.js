import Koa from 'koa'
import IO from 'koa-socket-2'
import koaSend from 'koa-send'
import koaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'
import Busboy from 'busboy'


const app = new Koa();

const io = new IO({
    ioOptions: {
        pingTimeout: 10000,
        pingInterval: 5000
    }
});

// 注入应用
io.attach(app)

app.use(koaSend)
app.use(koaStatic)
app.use(bodyParser)
app.use(Busboy)
