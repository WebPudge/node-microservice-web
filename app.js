//koa based nodejs framework. this could be replaced by other framework.
const Application = require('koa');
const app = new Application();
const Router = require('koa-router');
const router = new Router();
const ip = require('ip');
const debug = require('debug')('dev:router');

router.get('/microserviceweb/getServerIp', async(ctx) => {
    ctx.body = {
        ip: ip.address()
    }
})

//listen on port 3000
app.listen(3000, '0.0.0.0', () => {
    debug('Node Server running at : 3000 ');
});
app
    .use(router.routes())
    .use(router.allowedMethods);