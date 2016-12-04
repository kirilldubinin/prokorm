(function() {
  angular.module('mytodo').directive('groupButtons', groupButtons);
  function groupButtons() {
      var directive = {
          restrict: 'E',
          templateUrl: 'app/feed/controls/groupButtons/groupButtons.html',
          scope: {
            items: '=',
            allowAdd: '=',
            onAdd: '&',
            onSelect: '&'
          },
          //replace: true,    
          controller: GroupButtonsController,
          controllerAs: 'groupButtons',
          bindToController: true
      };
      return directive;
  }

  function GroupButtonsController($scope) {

    var self = this;
    
    $scope.$watch('self.items', function () {
      self.selected = _.last(self.items);
      self.onSelect({item: self.selected});  
    });

    self.onAddHandler = function () {
      self.onAdd();
    };

    self.onClick = function (item) {
      self.selected = item;
      self.onSelect({item: self.selected});
    };
  }
})();