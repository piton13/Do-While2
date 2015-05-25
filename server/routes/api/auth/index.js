var express = require('express'),
    router = express.Router(),
    requireDir = require('require-dir'),
    authRoutes = requireDir('./');

router.use('/google', authRoutes.google);

module.exports = router;