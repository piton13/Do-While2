var angular = require('angular');

var signInModule = angular.module('authModule', [])
    .factory('credentials', require('./credentials.factory'))
    .factory('googleSignInService', require('./googleSignIn.service'))
    .config(require('./signIn.config'))
    .run(require('./signIn.run'));

module.exports = signInModule.name;