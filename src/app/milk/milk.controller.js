(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('MilkController', MilkController);

  /** @ngInject */
  function MilkController() {
    var vm = this;

    var data1 = [];

    for(var i = 0; i < 30; i++) {
      data1.push(Math.round((8 - Math.random()) * 100) / 100);
    }
    for(var i = 0; i < 30; i++) {
      data1.push(Math.round((6 + Math.random()) * 100) / 100);
    }
    for(var i = 0; i < 30; i++) {
      data1.push(Math.round((6 - Math.random()) * 100) / 100);
    }   

    var data2 = [];

    for(var i = 0; i < 30; i++) {
      data2.push(Math.round((1 + Math.random()) * 100) / 100);
    }
    for(var i = 0; i < 30; i++) {
      data2.push(Math.round((1 - Math.random()) * 100) / 100);
    }
    for(var i = 0; i < 30; i++) {
      data2.push(Math.round((1 + Math.random()) * 100) / 100);
    }     

    $('#container').highcharts({
        chart: {
            
        },
        title: {
            text: 'Валовка по дням в зависимости от рациона'
        },
        subtitle: {
            text: '01 Сентября 2016 - 01 Декабря 2016'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
                text: 'Тонн'
            },
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null
        },
        tooltip: {
            valueSuffix: ' тонн'
        },
        plotOptions: {
            spline: {
                lineWidth: 3,
                states: {
                    hover: {
                        lineWidth: 4
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 3600000 * 24, // one hour
                pointStart: Date.UTC(2016, 09, 1, 0, 0, 0)
            }
        },
        series: [{
            type: 'column',
            name: 'Рацион#02',
            data: data1

        }, {
            type: 'spline',
            name: 'Высший сорт',
            data: data1

        }, {
          type: 'spline',
            name: 'Первый сорт',
            data: data2
        }], 
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });

    $('#container').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Average Monthly Temperature and Rainfall in Tokyo'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Rainfall',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Rainfall',
            type: 'column',
            pointWidth: 120,
            yAxis: 1,
            data: [8],
            tooltip: {
                valueSuffix: ' mm'
            }

        }, {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 7.5, 6.5, 7.2, 7.5, 7.2, 6.5, 7.3, 5.3, 5.9, 6.6],
            tooltip: {
                valueSuffix: '°C'
            }
        }]
    });
  }
})();
