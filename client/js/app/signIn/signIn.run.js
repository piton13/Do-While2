var AlreadyAuthorizedError = require('./errors/AlreadyAuthorizedError');

/*
 * @ngInject
 * */
module.exports = function ($rootScope, $state, credentials) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        if (error instanceof AlreadyAuthorizedError) {
            $state.go('main.today');
            event.preventDefault();
        }
    });
};