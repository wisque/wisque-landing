import Router from 'koa-router';
const indexRouter = new Router();
import path from 'path';
import stream from 'koa-stream';

indexRouter
    .get('/', function *() {
        yield this.render('index');
    })
    .get('/videos/video2.mp4', function*() {
        yield stream.file(this, 'video1.mp4', {root: path.join(__dirname, 'videos')});
    });

export default app => {
    app.use(indexRouter.routes());
};

