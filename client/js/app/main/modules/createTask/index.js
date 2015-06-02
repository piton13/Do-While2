module.exports = require('angular')
    .module('createTaskModule', [])
    .directive('dwTaskHeader', require('./header/taskHeader.directive'))
    .controller('createTaskCtrl', require('./createTask.controller'))
    .config(require('./createTask.config.js'))
    .name;
