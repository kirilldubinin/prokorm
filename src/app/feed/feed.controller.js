(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('FeedController', FeedController);

  /** @ngInject */
  function FeedController() {
    var vm = this;
    vm.feedItems = [
      {
        name: 'Сенаж многолетка',
        source: 'Поле: 123.11 78 ГА',
        composition: 'Люцерна',
        year: '2016',
        weight: 1300,
        storage: 'Курган #4',
        done: false
      },
      {
        name: 'Силос',
        source: 'Поле: 113.09 120 ГА',
        composition: 'Кукуруза',
        year: '2016',
        weight: 2200,
        storage: 'Курган #1',
        done: false
      },{
        name: 'Силос',
        source: 'Поле: 113.09 100 ГА',
        composition: 'Кукуруза',
        year: '2014',
        weight: 2200,
        storage: 'Курган #1',
        done: true
      }
    ];

    vm.selectedFeedItem = vm.feedItems[0];
  }
})();
