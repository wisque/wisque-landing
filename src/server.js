'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import Koa from 'koa';
import registerMiddlewares from './middleware';
import registerRoutes from './routes';

const app = new Koa();

registerMiddlewares(app);
registerRoutes(app);

app.listen(4000, () => {
    console.log(`
    ==============================
    WISQUE APP LANDING   *********
    NOW RUNNING ON PORT 4000 *****
    ENVIRONMENT IS DEVELOPMENT ***
    ==============================
    `);
});

/** Handle all unhandled promise rejections and exceptions **/
process.on('uncaughtException', error => {
    console.error(`Uncaught exception: "${error}". ${error.stack || 'No stack trace'}`);
});

process.on('unhandledRejection', error => {
    console.error(`Unhandled promise rejection: "${error}". ${error.stack || 'No stack trace'}`);
});

export default app;