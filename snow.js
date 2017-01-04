
var chicago = [21,16,9,1,0,5,17];
var cincinn = [14,10,5,0,0,2,10];
var nashvil = [6, 4, 1,0,0,0, 3];

var hcObj = {

title: {align: "left", text: ''},
xAxis: {
categories: ['Jan','Feb','Mar','Apr','N/A','Nov','Dec']
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
