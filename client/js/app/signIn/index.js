var angular = require('angular');

var signInModule = angular.module('authModule', [])
    .factory('credentials', require('./credentials.factory'))
    .factory('googleSignInService', require('./google/googleSignIn.service'))
    .config(require('./signIn.config'))
    .constant('googleAppId', '743517210814-njm0f30m5nl30iprhjn4i4vkuri307vu.apps.googleusercontent.com')
    .run(require('./signIn.run'));

module.exports = signInModule.name;