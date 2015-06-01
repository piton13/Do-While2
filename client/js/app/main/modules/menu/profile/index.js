module.exports = require('angular')
    .module('profileModule', [])
    .directive('dwProfile', require('./profile.directive'))
    .name;
