
var chicago_temp = [
    [16,32],
    [19,35],
    [28,47],
    [39,60],
    [49,71],
    [59,80],
    [64,84],
    [62,82],
    [54,76],
    [42,63],
    [32,49],
    [22,36]
];
var cincinnati_temp = [
    [23,40],
    [25,43],
    [33,54],
    [43,66],
    [53,75],
    [62,83],
    [66,87],
    [64,86],
    [57,80],
    [45,67],
    [35,55],
    [27,44]
];
var nashville_temp = [
    [29,48],
    [31,52],
    [39,62],
    [47,72],
    [56,79],
    [65,87],
    [69,89],
    [67,89],
    [60,80],
    [47,72],
    [38,61],
    [31,51]
];
Highcharts.setOptions({
    colors: ['#c42525', '#77a1e5', '#a6c96a']
});
Highcharts.chart('container', {

    title: {text: ''},
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        ,gridLineWidth: 1
        ,crosshair: {width:1,color:'#000'}
    },
    yAxis: {
        title: {text: ''},
        labels: {
        format: '{value} °F'
        }
    },
    legend: {
        verticalAlign: "top"
    },
    series: [{
        name: 'Chicago',
        data: chicago_temp,
        type: 'arearange',
        fillOpacity: 0.5,
    },{
        name: 'Cincinnati',
        data: cincinnati_temp,
        type: 'arearange',
        fillOpacity: 0.7,
    },{
        name: 'Nashville',
        data: nashville_temp,
        type: 'arearange',
        fillOpacity: 0.3,
    }]
});
