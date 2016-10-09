(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('FarmController', FarmController);

  /** @ngInject */
  function FarmController() {
    var vm = this;
    vm.buildings = [
      {
        name: '#1',
        type: 'dairy'
      }
    ];
  }
})();
