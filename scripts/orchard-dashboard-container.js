/// <reference path="vendor/angular/angular.js" />
'use strict';

angular.module('orchard').directive('orchardDashboardContainer', function () {
    return {
        replace: true,
        restrict: 'EA',
        templateUrl: 'core/dashboard/templates/orchard-dashboard-container.html',
        scope: {

        },
        controller: function ($scope) {
           
        }
    };
});
