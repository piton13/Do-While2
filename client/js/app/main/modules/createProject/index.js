var angular = require('angular');

var createModule = angular.module('createModule', [])
    .controller('createProjectCtrl', require('./createProject.controller'))
    .config(require('./createProject.config'));

module.exports = createModule.name;
