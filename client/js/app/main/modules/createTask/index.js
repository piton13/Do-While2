module.exports = require('angular')
    .module('createTaskModule', [])
    .directive('dwTaskHeader', require('./header/taskHeader.directive'))
    .config(require('./createTask.config.js'))
    .name;
