/*@ngInject*/
module.exports = function (googleSignInService, $state) {
    var vm = this;

    vm.google = function () {
        googleSignInService.authorize(function () {
            $state.go('main.today');
        });
    };

    vm.facebook = function () {
        //todo
    };
};