import Koa from 'koa';
import IO from 'koa-socket-2'
import koaSend from 'koa-send';
import koaStatic from 'koa-static';
import path from 'path';

const app = new Koa();

const io = new IO({
    ioOptions: {
        pingTimeout: 10000,
        pingInterval: 5000
    }
});

// 注入应用
io.attach(app);

export default app;