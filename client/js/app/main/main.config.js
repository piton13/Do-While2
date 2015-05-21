/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('main', {
        abstract: true,
        controller: require('./main.controller'),
        controllerAs: 'page',
        templateKey: 'main.view.html'
    });
};