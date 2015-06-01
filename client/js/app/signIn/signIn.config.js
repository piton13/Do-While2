/**
 * @ngInject
 */
module.exports = function ($stateProvider, $httpProvider) {

    $httpProvider.interceptors.push(require('./httpAuthInterceptor.factory.js'));

    $stateProvider.state('signIn', {
        url: '/signIn',
        resolve: /*@ngInject*/function (credentials) {
            return credentials.checkUnauthorized();
        },
        controller: require('./signIn.controller'),
        controllerAs: 'signIn',
        templateUrl: 'signIn.view.html'
    });
};