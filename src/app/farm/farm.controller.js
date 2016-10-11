(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('FarmController', FarmController);

  /** @ngInject */
  function FarmController($mdDialog) {
    var vm = this;
    vm.buildings = [
      {
        name: 'Двор#1',
        cowsCount: 410,
        groups: [
          {
            number: '02',
            name: 'Первая группа',
            color: 'blue',
            cowsCount: 60
          },
          {
            number: '03',
            name: 'Первая группа',
            color: 'blue',
            cowsCount: 54
          },
          {
            number: '04',
            name: 'Мастит',
            color: 'red',
            cowsCount: 12
          }, {
            number: '12',
            name: 'Мастит',
            color: 'red',
            cowsCount: 32
          }
        ]
      }
    ];

    vm.showGroupDialog = function (group) {
      $mdDialog.show({
        controller: 'GroupController',
        templateUrl: './app/group/group.html',
        parent: angular.element(document.body),
        //targetEvent: ev,
        clickOutsideToClose:true
        //fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {
        
      }, function() {
        
      });
    }
  }
})();
