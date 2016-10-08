var Koa = require('koa');
const index = require('./routers/example');
const router = require('koa-router')();

module.exports = function(connection, logger) {

    logger.info("Application started");
    const app = new Koa();

    app.use(function* () {
        this.body = 'Hello World';
    });

    // router.get('/', index);

    // app.use(router.routes())
    //    .use(router.allowedMethods());

    return app;
}
