(function() {
    'use strict';
    angular.module('mytodo').directive('cardPayment', cardPayment);
    /** @ngInject */
    function cardPayment() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/cardPayment/cardPayment.html',
            scope: {
                card: '='
            },
            controller: CardPaymentController,
            controllerAs: 'card',
            bindToController: true
            /*link: function (scope) { 

              scope.edit = function () {
                debugger;
                scope.selectedPayment;
              };
            }*/
            
        };
        return directive;
    }
    /** @ngInject */
    function CardPaymentController() {
      
      var self = this;
      angular.extend(self, self.card);
      self.selectedPayment = null;
      self.edit = function (itemToEdit) {
        self.itemToEdit = itemToEdit || {
          dateTime: new Date().getTime(),
          paid: true,
          payment: {
            value: 0
          },
          target: {
            title: ''
          }
        }
      }
    }
})();