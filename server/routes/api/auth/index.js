var express = require('express'),
    router = express.Router(),
    requireDir = require('require-dir'),
    authRoutes = requireDir('./');

router.use('/google', authRoutes.google);
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;