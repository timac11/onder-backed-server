const express = require('express');
const opts = require('optimist').argv;

const Router = require('express-promise-router');
const router = new Router();

const messService = require('./services/messenger');

const bodyParser = require('body-parser');

const app = express();

const port = opts.port || 3000;

/**
 * This is used for logging requests
 */

app.use(bodyParser());

app.use('/', (req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
}, (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
});

app.use('/', router);

/**
 * Errors handler
 */
/*app.use((err, req, res, next) => {
    const errorCode = err.errorCode || 404;
    const errorText = err.errorMessage || 'Server error';
    res.status(errorCode).send(errorText);
});*/

router.get('/users', async (req, res) => {
    const result = await messService.getUserByNick();
    res.send(result);
});

/**
 *  Starting server
 */
app.listen(port, () => {
    console.log(`server started at ${port} port`);
});

