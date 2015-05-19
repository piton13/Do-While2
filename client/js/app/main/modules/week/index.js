var angular = require('angular');

var weekModule = angular.module('weekModule', [
    require('./weekNav')
])
    .config(require('./week.config'));

module.exports = weekModule.name;
