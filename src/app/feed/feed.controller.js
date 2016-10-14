(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('FeedController', FeedController);

  /** @ngInject */
  function FeedController($scope, $mdDialog, group) {
    //var vm = this;
    //vm.group = group;
    $scope.feed = feed;
  }
})();
