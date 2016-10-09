(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.cards = [
      {
        title: 'K700',
        description: 'The best truck in the world, but need some fix',
        img: './assets/images/yeoman.png',
        currency: 'RUB',
        summ: 1200000,
        payments: [
          {
            title: 'Трактор К700',
            description: 'собственно сам трактор целиком',
            dateTime: new Date(),
            payment: {
              value: 280000
            },
            target: {
              title: 'ООО "Буревестник"'  
            },
            paid: true
          },
          {
            title: 'Ремонт коробки',
            description: 'капиталка КПП',
            dateTime: new Date(),
            payment: {
              value: 90000
            },
            target: {
              title: 'усач'  
            },
            paid: true
          }
        ]
      },
      {
        title: 'Гараж',
        description: 'гараж для спецтехнинки в Лучинаках',
        img: './assets/images/angular.png',
        currency: 'RUB',
        summ: 902222,
        payments: [
          {
            title: 'Фермы, 5 штук',
            description: 'фермы перекрытия, 24м, шаг 6м, распилены пополам',
            dateTime: new Date(),
            payment: {
              value: 260000
            },
            target: {
              title: 'ООО "Стройка"'  
            },
            paid: true
          },
          {
            title: 'Доставка',
            description: 'доставка ферм',
            dateTime: new Date(),
            payment: {
              value: 20000
            },
            target: {
              title: '905 560 33 44'  
            },
            paid: true
          },
          {
            title: 'Разгрузка ферм',
            description: '',
            dateTime: new Date(),
            payment: {
              value: 20000
            },
            target: {
              title: '910 560 43 14'  
            },
            paid: false
          }
        ]
      }
    ]; 
  }
})();
