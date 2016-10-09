(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('GroupController', GroupController);

  /** @ngInject */
  function GroupController() {
    var vm = this;
    vm.buildings = [
      {
        name: '#1',
        type: 'dairy'
      }
    ];
  }
})();
