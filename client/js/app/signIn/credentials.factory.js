var UnauthorizedError = require('./errors/UnauthorizedError'),
    AlreadyAuthorizedError = require('./errors/AlreadyAuthorizedError'),
    angular = require('angular');

/**
 * @ngInject
 */
module.exports = function ($q) {
    var CREDENTIALS_KEY = 'credentials';

    return {
        get: getCredentials,
        set: setCredentials,
        reset: resetCredentials,
        checkAuthorized: getCredentialsQ,
        checkUnauthorized: function () {
            var deferred = $q.defer();
            this.checkAuthorized()
                .then(function () {
                    deferred.reject(new AlreadyAuthorizedError());
                })
                .catch(function (error) {
                    if (error instanceof UnauthorizedError)
                        deferred.resolve();
                });
            return deferred.promise;
        }
    };

    function getCredentials() {
        return localStorage.getItem(CREDENTIALS_KEY)
    }

    function sanitizeCredentials(credentials) {
        if (angular.isString(credentials))
            return credentials;
        if (angular.isObject(credentials)) {
            if (angular.isString(credentials.access_token))
                return credentials.access_token;
            if (angular.isString(credentials.token))
                return credentials.token;
        }
        throw new Error('invalid credentials');
    }

    function setCredentials(credentials) {
        credentials = sanitizeCredentials(credentials);
        localStorage.setItem(CREDENTIALS_KEY, credentials);
    }

    function resetCredentials() {
        localStorage.removeItem(CREDENTIALS_KEY);
    }

    function getCredentialsQ() {
        var deferred = $q.defer();
        var credentials = getCredentials();
        if (!!credentials)
            deferred.resolve(credentials);
        else
            deferred.reject(new UnauthorizedError);
        return deferred.promise;
    }
};
