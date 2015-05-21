var angular = require('angular');
/**
 * @ngInject
 * */
module.exports = function ($stateProvider) {
    $stateProvider.decorator('views', require('./templateKey.decorator.js'));
};