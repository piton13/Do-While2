/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('main.week', {
        url: '/week',
        controller: require('./week.controller'),
        controllerAs: 'week',
        templateKey: 'week.view.html'
    });
};
