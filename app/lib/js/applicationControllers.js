'use strict';

/* Controllers */

angular.module('application.controllers', [])
    .controller('applicationCtrl', ['$scope', 'applicationService',
        function($scope, applicationService) {
            'use strict';
            $.support.cors = true;
           
        }
    ]);