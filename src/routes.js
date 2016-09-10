import Router from 'koa-router';
import path from 'path';
import stream from 'koa-stream';

const indexRouter = new Router();

indexRouter
    .get('/styles', function*() {
        yield this.render('elements');
    })
    .get('/', function *() {
        yield this.render('index');
    })
    .get('/videos/preview.mp4', function*() {
        yield stream.file(this, 'preview.mp4', {root: path.join(__dirname, 'videos')});
    });

export default app => {
    app.use(indexRouter.routes());
};

