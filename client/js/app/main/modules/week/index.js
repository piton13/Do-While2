var angular = require('angular');

var weekModule = angular.module('weekModule', [
    require('./weekNav')
])
    .service('weekService', require('./week.service'))
    .config(require('./week.config'));

module.exports = weekModule.name;
