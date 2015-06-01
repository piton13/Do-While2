var OAuth2BearerStrategy = require('passport-http-bearer').Strategy,
    User = require('../../models/user'),
    Q = require('q');

var bearerStrategy = new OAuth2BearerStrategy({},
    function (token, done) {
        Q(User.findOne({access_token: token}).exec())
            .then(function (user) {
                if(!user)
                    return done(null, false);
                return done(null, user, {scope: '*'});
            })
            .catch(function (err) {
                done(err);
            });
    }
);

module.exports = bearerStrategy;