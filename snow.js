
var chicago = [5,17,21,16,9,1];
var cincinn = [2,10,14,10,5,0];
var nashvil = [0, 3,6, 4, 1,0];

var hcObj = {

title: {align: "left", text: ''},
xAxis: {
categories: ['Nov','Dec','Jan','Feb','Mar','Apr']
},
yAxis: {
    labels: {format: '{value} days'},
    title: {text: ''}
},
legend: {align: "right",verticalAlign: "top"},
series: [{
    name: 'Chicago',
    data: chicago,
    type: 'column',
    lineColor: '#333',
    color: '#c42525',
    fillOpacity: 0.6
},{
    name: 'Cincinnati',
    data: cincinn,
    type: 'column',
    lineColor: '#333',
    color: 'rgb(50, 125, 255)',
    fillOpacity: 0.6
},{
    name: 'Nashville',
    data: nashvil,
    type: 'column',
    lineColor: '#333',
    color: '#a6c96a',
    fillOpacity: 0.6
}]
};
Highcharts.chart('container', hcObj);
