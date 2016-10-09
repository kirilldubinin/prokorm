(function() {
  'use strict';

  angular
    .module('mytodo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
    $stateProvider.state('farm', {
      url: '/farm',
      templateUrl: 'app/farm/farm.html',
      controller: 'FarmController',
      controllerAs: 'farm'
    });
    $stateProvider.state('group', {
      url: '/group',
      templateUrl: 'app/group/group.html',
      controller: 'GroupController',
      controllerAs: 'group'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
