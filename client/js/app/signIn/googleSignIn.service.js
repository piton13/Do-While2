var gapi = require('google-api');

/*@ngInject*/
module.exports = function ($http, $q, credentials) {
    var auth2,
        _onAuthorized;

    return {
        authorize: authorize
    };

    function authorize(onAuthorized) {
        _onAuthorized = onAuthorized;
        gapi.load('auth2', function () {
            auth2 = gapi.auth2.init({
                client_id: '743517210814-njm0f30m5nl30iprhjn4i4vkuri307vu.apps.googleusercontent.com',
                immediate: false
            });

            auth2.grantOfflineAccess({
                redirect_uri: 'postmessage'
            }).then(signIn);
        });
    }

    function signIn(authResult) {
        return verifyCode(authResult.code)
            .success(function (result) {
                console.log(result);
                credentials.set(result);
                _onAuthorized();
            })
            .error(function (reason) {
                console.log(reason);
            });
    }

    function verifyCode(code) {
        return $http.post('/api/auth/google', {
            code: code
        });
    }
};