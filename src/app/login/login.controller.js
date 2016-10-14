(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController() {
    var vm = this;
    vm.user = {
      name: '',
      password: ''
    };
  }
})();
