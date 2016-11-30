(function() {
    'use strict';
    angular.module('mytodo').directive('analysisView', analysisView);
    /** @ngInject */
    function analysisView() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/feed/feedView/analysisView/analysisView.html',
            scope: {
                analysis: '='
            },
            controller: AnalysisViewController,
            controllerAs: 'analysisView',
            bindToController: true
        };
        return directive;
    }
    /** @ngInject */
    function AnalysisViewController() {
        var vm = this;
        vm.properties = convertToControl(vm.general);

        function convertToControl(item) {
            return _.map(item, function(value, key) {
                return {
                    label: lang(key),
                    value: value,
                    dimension: dimension(key),
                    key: key
                }
            });
        };
    }
})();