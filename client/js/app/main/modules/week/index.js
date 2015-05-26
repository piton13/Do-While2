var angular = require('angular');

var weekModule = angular.module('weekModule', [
    require('./weekNav')
])
    .filter('myFilter', require('./week.filter'))
    .config(require('./week.config'));

module.exports = weekModule.name;
