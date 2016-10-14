(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('BuildingController', BuildingController);

  /** @ngInject */
  function BuildingController($mdDialog) {
    var vm = this;
    vm.buildings = [
      {
        name: 'Канада',
        cowsCount: 410,
        groups: [
          {
            number: '02',
            name: 'Молодняк, до 120 дней',
            color: 'yellow',
            cowsCount: 60,
            feedings: [
              {
                time: '6:15',
                mixers: [
                  {
                    count: 2,
                    feeds: [
                      {
                        name: 'Сенаж многолетка (2016)',
                        source: 'Курган #4',
                        type: 'silo',
                        color: 'green',
                        weight: 1100
                      },
                      {
                        name: 'Силос кукуруза (2015)',
                        source: 'Курган #5',
                        type: 'silo',
                        color: 'green',
                        weight: 650
                      },
                      {
                        name: 'Сено',
                        source: 'Сеносклад',
                        type: 'silo',
                        color: 'green',
                        weight: 200
                      },
                      {
                        name: 'Зерно плющенка',
                        source: 'Курган #5',
                        type: 'korn',
                        color: 'yellow',
                        weight: 650
                      },
                      {
                        name: 'Вода',
                        source: '',
                        color: 'blue',
                        weight: 150
                      }
                    ]
                  }, {
                    count: 1,
                    feeds: [
                      {
                        name: 'Сенаж многолетка (2016)',
                        source: 'Курган #4',
                        type: 'silo',
                        color: 'green',
                        weight: 200
                      },
                      {
                        name: 'Силос кукуруза (2015)',
                        source: 'Курган #5',
                        type: 'silo',
                        color: 'green',
                        weight: 200
                      },
                      {
                        name: 'Сено',
                        source: 'Сеносклад',
                        type: 'silo',
                        color: 'green',
                        weight: 100
                      },
                      {
                        name: 'Солома',
                        source: 'Сеносклад',
                        type: 'silo',
                        color: 'green',
                        weight: 220
                      },
                      {
                        name: 'Зерно плющенка',
                        source: 'Курган #5',
                        type: 'korn',
                        color: 'yellow',
                        weight: 50
                      }
                    ]
                  }
                ]
              }, {
                time: '14:15',
                mixers: [
                  {
                    count: 2,
                    feeds: [
                      {
                        name: 'Сенаж многолетка (2016)',
                        source: 'Курган #4',
                        type: 'silo',
                        color: 'green',
                        weight: 650
                      },
                      {
                        name: 'Силос кукуруза (2015)',
                        source: 'Курган #4',
                        type: 'silo',
                        color: 'green',
                        weight: 650
                      },
                      {
                        name: 'Зерно плющенка',
                        source: 'Курган #4',
                        type: 'korn',
                        color: 'yellow',
                        weight: 650
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            number: '03',
            name: 'Молодняк, до 60 дней',
            color: 'yellow',
            cowsCount: 54
          },
          {
            number: '04',
            name: 'Мастит',
            color: 'red',
            cowsCount: 12
          }, {
            number: '12',
            name: 'Мастит',
            color: 'red',
            cowsCount: 32
          }
        ]
      }, {
        name: 'Европа',
        cowsCount: 410,
        groups: [
          {
            number: '05',
            name: 'Первая группа, 30 л',
            color: 'blue',
            cowsCount: 60,
            feedings: [
              {
                time: '7:15',
                mixers: [
                  {
                    count: 2,
                    feeds: [
                      {
                        name: 'Сенаж многолетка (2016)',
                        source: 'Курган #4',
                        type: 'silo',
                        color: 'green',
                        weight: 1100
                      },
                      {
                        name: 'Силос кукуруза (2015)',
                        source: 'Курган #5',
                        type: 'silo',
                        color: 'green',
                        weight: 650
                      },
                      {
                        name: 'Сено',
                        source: 'Сеносклад',
                        type: 'silo',
                        color: 'green',
                        weight: 200
                      },
                      {
                        name: 'Зерно плющенка',
                        source: 'Курган #5',
                        type: 'korn',
                        color: 'yellow',
                        weight: 650
                      },
                      {
                        name: 'Вода',
                        source: '',
                        color: 'blue',
                        weight: 150
                      }
                    ]
                  }, {
                    count: 1,
                    feeds: [
                      {
                        name: 'Сенаж многолетка (2016)',
                        source: 'Курган #4',
                        type: 'silo',
                        color: 'green',
                        weight: 200
                      },
                      {
                        name: 'Силос кукуруза (2015)',
                        source: 'Курган #5',
                        type: 'silo',
                        color: 'green',
                        weight: 200
                      },
                      {
                        name: 'Сено',
                        source: 'Сеносклад',
                        type: 'silo',
                        color: 'green',
                        weight: 100
                      },
                      {
                        name: 'Солома',
                        source: 'Сеносклад',
                        type: 'silo',
                        color: 'green',
                        weight: 220
                      },
                      {
                        name: 'Зерно плющенка',
                        source: 'Курган #5',
                        type: 'korn',
                        color: 'yellow',
                        weight: 50
                      }
                    ]
                  }
                ]
              }, {
                time: '14:15',
                mixers: [
                  {
                    count: 2,
                    feeds: [
                      {
                        name: 'Сенаж многолетка (2016)',
                        source: 'Курган #4',
                        type: 'silo',
                        color: 'green',
                        weight: 650
                      },
                      {
                        name: 'Силос кукуруза (2015)',
                        source: 'Курган #4',
                        type: 'silo',
                        color: 'green',
                        weight: 650
                      },
                      {
                        name: 'Зерно плющенка',
                        source: 'Курган #4',
                        type: 'korn',
                        color: 'yellow',
                        weight: 650
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            number: '06',
            name: 'Первая группа, 30 л',
            color: 'blue',
            cowsCount: 54
          },
          {
            number: '07',
            name: 'Вторая группа, 20 л',
            color: 'blue',
            cowsCount: 12
          }, {
            number: '08',
            name: 'Вторая группа, 20 л',
            color: 'blue',
            cowsCount: 32
          }
        ]
      }
    ];

    vm.showGroupDialog = function (group) {
      $mdDialog.show({
        controller: 'GroupController',
        templateUrl: './app/group/group.html',
        parent: angular.element(document.body),
        //targetEvent: ev,
        clickOutsideToClose:true,
        locals: {
            group : group
        }
        //fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {
        
      }, function() {
        
      });
    }
  }
})();
