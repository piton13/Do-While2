var angular = require('angular');

var templateCacheModule = angular.module('templateCacheModule', [])
    .run(require('./templateCache.run'));

module.exports = templateCacheModule.name;