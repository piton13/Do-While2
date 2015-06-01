var UnauthorizedError = require('./errors/UnauthorizedError'),
    angular = require('angular');

/*@ngInject*/
module.exports = function ($q, $rootScope, credentials) {
    return {
        request: function (config) {
            return setCredentials(config);
        },
        responseError: function (reason) {
            if (isResponseUnauthorized(reason))
                onResponseUnauthorized();
            return $q.reject(reason);
        }
    };

    function setCredentials(config) {
        function formatBearerTokenHeader(credentials) {
            return 'Bearer ' + credentials;
        }

        config.headers.Authorization = formatBearerTokenHeader(credentials.get());
        return config;
    }

    function isResponseUnauthorized(response) {
        return response.status === 401;
    }

    function onResponseUnauthorized() {
        credentials.reset();
        $rootScope.$emit('$stateChangeError', null, null, null, null, new UnauthorizedError());
    }
};