/// <reference path="vendor/angular/angular.js" />
'use strict';

angular.module('orchard').directive('orchardDashboard', function () {
    return {
        replace: true,
        restrict: 'EA',
        templateUrl: 'core/dashboard/templates/orchard-dashboard.html',
        scope: {

        },
        controller: function($scope)
        {
            $scope.model = { title: 'test' };
        }
    };
});
