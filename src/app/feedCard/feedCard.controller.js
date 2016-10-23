(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('FeedCardController', FeedCardController);

  /** @ngInject */
  function FeedCardController() {
    var vm = this;
    vm.feed = {
        _id: 1,
        name: 'Сенаж',
        source: 'Поле: 123.11 78 ГА',
        composition: 'Люцерна',
        year: '2016',
        weight: 1300,
        opened: true,
        storage: 'Курган #04',
        done: false
    }
  }
})();
