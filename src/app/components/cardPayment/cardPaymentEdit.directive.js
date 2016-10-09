(function() {
    'use strict';
    angular.module('mytodo').directive('cardPaymentEdit', cardPaymentEdit);
    /** @ngInject */
    function cardPaymentEdit() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/cardPayment/cardPaymentEdit.html',
            scope: {
                card: '='
            },
            controller: CardPaymentEditController,
            controllerAs: 'cardEdit',
            bindToController: true
        };
        return directive;
    }
    /** @ngInject */
    function CardPaymentEditController() {
      
      var self = this;
      angular.extend(self, self.card);
    }
})();