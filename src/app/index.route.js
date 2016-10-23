(function() {
  'use strict';

  angular
    .module('mytodo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('farm', {
        url: '/farm',
        abstract: true,
        templateUrl: 'app/rootTemplate.html',
      })
      .state('farm.login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'  
      }).state('farm.instance', {
        url: '/:id',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
        abstract: true,
        params: {
          id: undefined
        }
      }).state('farm.instance.selector', {
        url: '/selector',
        templateUrl: 'app/selector/selector.html',
        controller: 'SelectorController',
        controllerAs: 'selector'
      }).state('farm.instance.building', {
        url: '/building',
        templateUrl: 'app/building/building.html',
        controller: 'BuildingController',
        controllerAs: 'building'
      }).state('farm.instance.milk', {
        url: '/milk',
        templateUrl: 'app/milk/milk.html',
        controller: 'MilkController',
        controllerAs: 'milk'
      }).state('farm.instance.feed', {
        url: '/feed',
        templateUrl: 'app/feed/feed.html',
        controller: 'FeedController',
        controllerAs: 'feed'
      }).state('farm.instance.feed.instance', {
        url: '/:feedId',
        templateUrl: 'app/feedCard/feedCard.html',
        controller: 'FeedCardController',
        controllerAs: 'feedCard',
        params: {
          feedId: undefined
        }
      });

    /*$stateProvider.state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    });

    $stateProvider.state('farm', {
      url: '/farm',
      templateUrl: 'app/farm/farm.html',
      controller: 'FarmController',
      controllerAs: 'farm'
    });
    $stateProvider.state('farm.feed', {
      url: '/feed',
      templateUrl: 'app/feed/feed.html',
      controller: 'FeedController',
      controllerAs: 'feed'
    });

    $stateProvider.state('group', {
      url: '/group',
      templateUrl: 'app/group/group.html',
      controller: 'GroupController',
      controllerAs: 'group'
    });*/



    $urlRouterProvider.otherwise('/');
  }

})();
