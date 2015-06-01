/*@ngInject*/
module.exports = function ($http) {
    return {
        getProfile: getProfile
    };

    function getProfile() {
        return $http.get('/api/users/me');
    };
};