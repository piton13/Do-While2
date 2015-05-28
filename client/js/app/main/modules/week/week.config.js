/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('main.week', {
        url: '/week',
        controller: require('./week.controller'),
        controllerAs: 'week',
        templateUrl: 'week.view.html'
    });
};
