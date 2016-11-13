(function() {
    'use strict';
    angular.module('mytodo').directive('feedFilter', feedFilter);
    /** @ngInject */
    function feedFilter() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/feed/feedFilter.html',
            scope: {
                card: '='
            },
            controller: FeedFilterController,
            controllerAs: 'feedFilter',
            bindToController: true
        };
        return directive;
    }
    /** @ngInject */
    function FeedFilterController() {
      
    }
})();