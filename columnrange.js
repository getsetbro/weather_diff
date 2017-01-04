
var chicago = [[16,32],[19,35],[28,47],[39,60],[49,71],[59,80],[64,84],[62,82],[54,76],[42,63],[32,49],[22,36]];
var cincinn = [[23,40],[25,43],[33,54],[43,66],[53,75],[62,83],[66,87],[64,86],[57,80],[45,67],[35,55],[27,44]];
var nashvil = [[29,48],[31,52],[39,62],[47,72],[56,79],[65,87],[69,89],[67,89],[60,80],[47,72],[38,61],[31,51]];

var hcObj = {
"chart": {"type": "columnrange"},
title: {align: "left", text: 'Temp'},
xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    gridLineWidth: 1,
    crosshair: {width:1,color:'#222'}
},
yAxis: {
    ceiling: 90,
    floor: 15,
    labels: {format: '{value} °F'},
    title: {text: ''},
    tickInterval: 5
},
legend: {align: "right",verticalAlign: "top"},
series: [{
    name: 'Chicago',
    data: chicago,
    lineColor: '#333',
    color: '#c42525',
    fillOpacity: 0.6
},{
    name: 'Cincinnati',
    data: cincinn,
    lineColor: '#333',
    color: 'rgb(50, 125, 255)',
    fillOpacity: 0.6
},{
    name: 'Nashville',
    data: nashvil,
    lineColor: '#333',
    color: '#a6c96a',
    fillOpacity: 0.6
}],
tooltip: {shared:true,borderWidth: 0}
};
Highcharts.chart('container', hcObj);
