import path from 'path';
import handlebars from 'koa-handlebars';
import morgan from 'koa-morgan';
import serve from 'koa-serve';
import body from 'koa-body';

export default function(app) {
    app.use(handlebars({
        root: path.join(__dirname, '../src'),
        extension: 'html',
        cache: app.env !== 'development',
        layoutsDir: 'views',
    }));
    app.use(morgan('dev'));
    app.use(body({ multipart: true }));
    app.use(serve('assets', __dirname));
}