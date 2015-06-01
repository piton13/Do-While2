var UnauthorizedError = require('../signIn/errors/UnauthorizedError');

/*@ngInject*/
module.exports = function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        if(error instanceof UnauthorizedError) {
            $state.go('signIn');
            event.preventDefault();
        }
    });
};