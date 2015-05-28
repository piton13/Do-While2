var angular = require('angular');

var vendorDependencies = [
    require('angular-ui-router')
];

angular.module('doWhileApp',
    [].concat(
        vendorDependencies,
        require('./common'),
        require('./app/index')
    )
).run(require('./app.run'));