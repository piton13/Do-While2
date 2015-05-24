var angular = require('angular');

var templateCacheModule = angular.module('templateCacheModule', [])
    .run(require('./templateCache.run'))
    .config(require('./templateCache.config'));

module.exports = templateCacheModule.name;