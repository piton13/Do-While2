/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('main.today', {
        url: '/today',
        controller: require('./today.controller'),
        controllerAs: 'today',
        templateUrl: 'today.view.html'
    });
};
