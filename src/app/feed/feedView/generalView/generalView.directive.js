(function() {
    'use strict';
    angular.module('mytodo').directive('generalView', generalView);
    /** @ngInject */
    function generalView() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/feed/feedView/generalView/generalView.html',
            scope: {
                general: '='
            },
            controller: GeneralViewController,
            controllerAs: 'generalView',
            bindToController: true
        };
        return directive;
    }
    /** @ngInject */
    function GeneralViewController(lang, dimension) {
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