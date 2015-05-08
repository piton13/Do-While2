var angular = require('angular'),
    appConfig = require('../../app.config.json'),
    ViewResolverService = require('./viewResolver.service');

/**
 * @ngInject
 */
module.exports = function () {
    /**
     * @ngInject
     */
    this.$get = function () {
        return new ViewResolverService(appConfig.view.basePath);
    };
};