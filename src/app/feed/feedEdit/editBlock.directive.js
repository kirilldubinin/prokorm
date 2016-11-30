(function() {
    'use strict';
    angular.module('mytodo').directive('editBlock', editBlock);
    /** @ngInject */
    function editBlock() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/feed/feedEdit/editBlock.html',
            scope: {
                feedPart: '=',
                title: '='
            },
            controller: EditBlockController,
            controllerAs: 'editBlock',
            bindToController: true
        };
        return directive;
    }
    /** @ngInject */
    function EditBlockController(lang, dimension) {
        var vm = this;
        debugger;
        vm.properties = convertToControl(vm.feedPart);

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