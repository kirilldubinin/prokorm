(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('FeedController', FeedController);

  /** @ngInject */
  function FeedController($window) {
    var vm = this;
    vm.feedItems = [
      {
        _id: 1,
        name: 'Сенаж',
        source: 'Поле: 123.11 78 ГА',
        composition: 'Люцерна',
        year: '2016',
        weight: 1300,
        opened: true,
        storage: 'Курган #04',
        done: false
      }, {
        _id: 2,
        name: 'Силос',
        source: 'Поле: 113.09 120 ГА',
        composition: 'Кукуруза',
        year: '2016',
        weight: 2200,
        storage: 'Траншея #07',
        done: false
      }, {
        name: 'Сено',
        source: 'Поле: 23.39 60 ГА',
        composition: 'Козлятник',
        year: '2016',
        weight: 2000,
        opened: true,
        storage: 'Сеносклад',
        done: false
      }, {
        name: 'Сенаж',
        source: 'Поле: 21.40 89 ГА',
        composition: 'Козлятник',
        year: '2016',
        weight: 600,
        storage: 'Курган #02',
        done: false
      }, {
        name: 'Силос',
        source: 'Поле: 113.09 100 ГА',
        composition: 'Кукуруза',
        year: '2014',
        weight: 2200,
        storage: 'Курган #01',
        done: true
      }, {
        name: 'Сенаж',
        source: 'Поле: 123.11 78 ГА',
        composition: 'Козлятник',
        year: '2015',
        weight: 2000,
        storage: 'Курган #04',
        done: true
      }
    ];

    vm.onFeedClick = function (feedItem) {
        $window.location.href = '#/farm/kamenskoe/feed/' + feedItem._id;
    };
  }
})();
