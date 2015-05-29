var angular = require('angular');

var newTaskModule = angular.module('newTaskModule', [])
    .config(require('./newTask.config'));

module.exports = newTaskModule.name;
