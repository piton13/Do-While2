/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('main', {
        abstract: true,
        controller: require('./main.controller'),
        controllerAs: 'page',
        templateUrl: 'main.view.html'
    });
};