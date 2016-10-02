import Router from 'koa-router';
import path from 'path';
import stream from 'koa-stream';
import convert from 'koa-convert';

const indexRouter = new Router();

indexRouter
    .get('/styles', async function (ctx) {
        await ctx.render('elements')
    })
    .get('/', async function(ctx) {
        await ctx.render('index')
    })
    .get('/videos/preview.mp4', convert(function *() {
        yield stream.file(this, 'preview.mp4', {root: path.join(__dirname, 'videos')});
    }));

export default app => {
    app.use(indexRouter.routes());
};

