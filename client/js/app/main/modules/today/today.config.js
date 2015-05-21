/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('main.today', {
        url: '',
        controller: require('./today.controller'),
        controllerAs: 'today',
        templateKey: 'today.view.html'
    });
};
