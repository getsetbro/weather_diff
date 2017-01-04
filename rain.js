
var chicago = [1.95,1.78,2.32,3.54,4.15,4.37,4.15,4.27,3.19,3.05,2.83,2.32];
var cincinn = [3.05,2.78,3.91,4.37,4.88,4.61,4.64,3.66,3.31,3.05,3.19,3.66];
var nashvil = [4.27,4.34,4.88,4.72,5.25,4.37,4.88,3.78,4.02,3.54,4.25,5.13];

var hcObj = {

title: {align: "left", text: ''},
xAxis: {
categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
},
yAxis: {
    labels: {format: '{value} in'},
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
