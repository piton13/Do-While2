var express = require('express'),
    apiRouter = express.Router();

apiRouter.use('/projects', require('./projects'));

module.exports = apiRouter;