//import the data
//var dataJson = require("../data/testdata.json");
var showKResult = function (dataJson, divId) {
    var kest = dataJson.kest;
    var kmax = dataJson.kmax;
    var kmin = dataJson.kmin;
    var maxSpaDis = dataJson.maxSpatialDistance;
    var maxTimDis = dataJson.maxTemporalDistance;
    //prepare data
    var spatialNum = kest.length;
    var temporalNum = kest[0].length;
    function prepareData(kest) {
        let dataArray = Array(spatialNum * temporalNum).fill(0);
        for (let i = 0; i < spatialNum; i++) {
            for (let j = 0; j < temporalNum; j++) {
                dataArray[i * temporalNum + j] = [j * (maxTimDis / (temporalNum - 1)), i * (maxSpaDis / (spatialNum - 1)), kest[i][j]];
            }
        }
        return dataArray;
    }
    var kestArray = prepareData(kest);
    var kmaxArray = prepareData(kmax);
    var kminArray = prepareData(kmin);

    //add visual suface by echarts
    var showWindow = document.getElementById(divId);
    var myChart = echarts.init(showWindow);
    var option = null;
    option = {
        tooltip: {},
        legend: {
            show: true,
            textStyle: {
                color: '#fff'
            },
            left: 0,

        },
        title: {
            text: 'Result of K Function Analysis',
            x: 'center',
            align: 'right',
            textStyle: {
                color: '#fff',
                fontSize: 18,
            },
            top: 45
        },
        backgroundColor: 'rgba(0,0,0,0)',
        xAxis3D: {
            name: 'X: Temporal Distance (Month)',
            type: 'value',
            nameTextStyle: {
                color: '#fff',
                fontSize: 15
            },
            axisLine: { lineStyle: { color: '#fff' } },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis3D: {
            name: 'Y: Spatial Distance (Meter)',
            type: 'value',
            nameTextStyle: {
                color: '#fff',
                fontSize: 15
            },
            axisLine: { lineStyle: { color: '#fff' } },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        zAxis3D: {
            name: 'Z: Value',
            type: 'value',
            nameTextStyle: {
                color: '#fff',
                fontSize: 15
            },
            axisLine: { lineStyle: { color: '#fff' } },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        grid3D: {
            boxWidth: 80,
            boxDepth: 80,
            boxHeight: 80,
            axisPointer: { lineStyle: { color: '#fff' } },
        },
        series: [{
            name: 'Kest',
            type: 'surface',
            wireframe: {
                // show: false
                color: '#666666'
            },
            shading: 'color',
            itemStyle: {
                opacity: 1,
                color: '#E84904'
            },
            data: kestArray,
        },
        {
            name: 'Kmax',
            type: 'surface',
            wireframe: {
                show: false
            },
            shading: 'color',
            itemStyle: {
                opacity: 0.5,
                color: '#FFD400'
            },
            data: kmaxArray
        },
        {
            name: 'Kmin',
            type: 'surface',
            wireframe: {
                show: false
            },
            shading: 'color',
            itemStyle: {
                opacity: 0.5,
                color: '#7068FF'
            },
            data: kminArray
        }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}


