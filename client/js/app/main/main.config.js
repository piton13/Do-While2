/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('main', {
        abstract: true,
        resolve: /*@ngInject*/function (credentials) {
            return credentials.checkAuthorized();
        },
        controller: require('./main.controller'),
        controllerAs: 'page',
        templateUrl: 'main.view.html'
    });
};