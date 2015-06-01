module.exports = require('angular')
    .module('profileModule', [])
    .factory('profileService', require('./profile.service'))
    .directive('dwProfile', require('./profile.directive'))
    .name;
