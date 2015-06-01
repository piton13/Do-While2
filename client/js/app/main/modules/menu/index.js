module.exports = require('angular')
    .module('menuModule', [
        require('./projectList'),
        require('./actionList'),
        require('./profile')
    ])
    .directive('dwMenu', require('./menu.directive'))
    .service('menuService', require('./menu.service'))
    .name;