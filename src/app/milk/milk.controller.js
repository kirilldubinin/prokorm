(function() {
  'use strict';

  angular
    .module('mytodo')
    .controller('MilkController', MilkController);

  /** @ngInject */
  function MilkController() {
    var vm = this;

    var data2 = [];

    for(var i = 0; i < 30; i++) {
        data2.push(Math.round((8.5 - Math.random()) * 100) / 100);
    }
    for(var i = 0; i < 30; i++) {
        data2.push(Math.round((8.5 + Math.random()) * 100) / 100);
    }
    for(var i = 0; i < 30; i++) {
        data2.push(Math.round((7.4 - Math.random()) * 100) / 100);
    }

    var data3 = [];

    for(var i = 0; i < 30; i++) {
        data3.push(Math.round((1.5 - Math.random()) * 100) / 100);
    }
    for(var i = 0; i < 30; i++) {
        data3.push(Math.round((1.3 + Math.random()) * 100) / 100);
    }
    for(var i = 0; i < 30; i++) {
        data3.push(Math.round((1.0 - Math.random()) * 100) / 100);
    }



    var ration1 = [];
    var ration2 = [];
    var ration3 = [];
    for(var i = 0; i < 31; i++) {
        ration1.push(10);
        ration2.push(null);
        ration3.push(null);
    }
    ration2.shift();
    ration3.shift();
    for(var i = 0; i < 31; i++) {
        ration2.push(10);
        ration3.push(null);
    }
    ration3.shift();
    for(var i = 0; i < 31; i++) {
        ration3.push(10);
    }

    $('#container').highcharts({
        chart: {
            /*type: 'area',
            spacingBottom: 30*/
        },
        title: {
            text: 'Суточная валовка молока в зависимости от рациона'
        },
        /*subtitle: {
            text: '* Jane\'s banana consumption is unknown',
            floating: true,
            align: 'right',
            verticalAlign: 'bottom',
            y: 15
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },*/
        xAxis: {
            type: 'datetime',
            //pointInterval: 3600000 * 24, // one day
            //pointStart: Date.UTC(2016, 09, 1, 0, 0, 0),
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            min: 1, 
            max: 10,
            title: {
                text: 'Тонн'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            }
        },
        plotOptions: {
            spline: {
                fillOpacity: 0.5,
                pointInterval: 3600000 * 24, // one day
                pointStart: Date.UTC(2016, 09, 1, 0, 0, 0),
                marker: {
                    enabled: false
                }
            },
            area: {
                fillOpacity: 0.5,
                pointInterval: 3600000 * 24, // one day
                pointStart: Date.UTC(2016, 09, 1, 0, 0, 0),
                marker: {
                    enabled: false
                }
            },
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'area',
            name: 'Рацион #11.2016',
            data: ration1
        }, {
            type: 'area',
            name: 'Рацион #12.2016',
            data: ration2
        }, {
            type: 'area',
            name: 'Рацион #13.2016',
            data: ration3
        },{
            type: 'spline',
            name: 'Высший сорт',
            data: data2

        }, {
            type: 'spline',
            name: 'Первый сорт',
            data: data3

        }]
    });
  }
})();
