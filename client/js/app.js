var angular = require('angular');

var appDependencies = [
    require('angular-ui-router')
]
    .concat(require('./common'))
    .concat(require('./app/index'));

angular.module('doWhileApp', appDependencies);
