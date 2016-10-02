import path from 'path';
import views from 'koa-views';
import morgan from 'koa-morgan';
import serve from 'koa-serve';
import body from 'koa-body';

export default function(app) {
    app.use(views(path.join(__dirname, '../src') + '/views'));
    app.use(morgan('dev'));
    app.use(body({ multipart: true }));
    app.use(serve('assets', __dirname));
}