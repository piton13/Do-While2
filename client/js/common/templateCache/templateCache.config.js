/**
 * @ngInject
 * */
module.exports = function ($stateProvider) {
    $stateProvider.decorator('views', require('./uiRouter.templateKey.decorator.js'));
};