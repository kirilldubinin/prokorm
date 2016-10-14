(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, $stateParams) {
    var vm = this;
  }
})();
