(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('GroupController', GroupController);

  /** @ngInject */
  function GroupController($scope, $mdDialog, group) {
    //var vm = this;
    //vm.group = group;
    $scope.group = group;
    debugger;
    $scope.group.showFeedDialog = function (){
      $mdDialog.show({
        controller: 'FeedController',
        templateUrl: './app/feed/feed.html',
        parent: angular.element(document.body),
        //targetEvent: ev,
        clickOutsideToClose:true,
        locals: {
            feed : null
        }
        //fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {
        
      }, function() {
        
      });
    }
  }
})();
