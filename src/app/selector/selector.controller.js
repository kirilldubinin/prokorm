(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('SelectorController', SelectorController);

  /** @ngInject */
  function SelectorController($window) {
    var vm = this;

    vm.modules = [
      {
        name: 'Здания',
        img: 'img/ic_home_white_24px.svg',
        url: '/building'
      }, {
        name: 'Корма',
        img: 'img/ic_layers_white_48px.svg',
        url: '/feed'
      }, {
        name: 'Рационы',
        img: 'img/ic_home_white_24px.svg',
        url: '/ration'
      }
    ];

    vm.onModuleClick = function (module) {
      $window.location.href = '#/farm/kamenskoe' + module.url;
    }
  }
})();
