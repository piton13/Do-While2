var express = require('express'),
    apiRouter = express.Router();

apiRouter.use('/auth', require('./auth'));
apiRouter.use('/projects', require('./projects'));

module.exports = apiRouter;