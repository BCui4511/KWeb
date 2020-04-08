import React from 'react';

//导入折线图
import 'echarts/lib/chart/line';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import 'echarts-gl';
import ReactEcharts from 'echarts-for-react';
// import data from './confidence.json';
import dataJson from '../common/result.json';
import './Result.css';

const conData = [];
for (let i=0;i<dataJson.kest.length;i++) {
  conData[i] = {
    value: dataJson.kest[i][2],
    l: dataJson.kmin[i][2],
    u: dataJson.kmax[i][2],
  };
}
console.log(conData);
const data=conData;
const base = -data.reduce(function (min, val) {
  return Math.floor(Math.min(min, val.l));
}, Infinity);
console.log(base);

dataJson.time = new Date();
let calResults = [dataJson, dataJson];

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  componentDidUpdate(prevProps) {
    if (this.props.calResult !== prevProps.calResult) {
      // calResults.push[this.props.calResult];
    }
  };



  getOption = (dataJson) => {
    let time = dataJson.time;
    // 普通
    // 2D 可视化 数据为 ./confidence.json

    // 三维
    // const dataJson = this.props.calResult;
    var kest = dataJson.kest;
    var kmax = dataJson.kmax;
    var kmin = dataJson.kmin;
    var maxSpaDis = dataJson.maxSpatialDistance;
    var maxTimDis = dataJson.maxTemporalDistance;
    //prepare data
    var spatialNum = kest.length;
    var temporalNum = kest[0].length;
    const prepareData = (kest) => {
      let dataArray = Array(spatialNum * temporalNum).fill(0);
      for (let i = 0; i < spatialNum; i++) {
        for (let j = 0; j < temporalNum; j++) {
          dataArray[i * temporalNum + j] = [j * (maxTimDis / (temporalNum - 1)), i * (maxSpaDis / (spatialNum - 1)), kest[i][j]];
        }
      }
      return dataArray;
    }
    var kestArray = prepareData(kest)[1];
    var kmaxArray = prepareData(kmax)[1];
    var kminArray = prepareData(kmin)[1];

    let option2D = {
      title: {
        text: `${time.getFullYear()}-${this.fill0(time.getMonth() + 1)}-${this.fill0(time.getDate())}` +
          `\n${this.fill0(time.getHours())}:${this.fill0(time.getMinutes()+Math.round(Math.random()*10))}`,
        textStyle: {
          color: '#ccc',
          fontSize: 10
        },
        x: 'center',
        y: 'bottom'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          animation: false,
          label: {
            backgroundColor: '#ccc',
            borderColor: '#aaa',
            borderWidth: 1,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,

            color: '#222'
          }
        },
        formatter: function (params) {
          return params.value;
        }
      },
      grid: {
        top: 30,
        left: '3%',
        right: 50,
        bottom: 30,
        containLabel: true
      },
      xAxis: {
        name: 'd',
        type: 'category',
        data: data.map(function (item, index) {
          return index*2;
        }),
        axisLabel: {
          formatter: function (value, idx) {
            // var date = new Date(value);
            // return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
            return idx*2;
          }
        },
        splitLine: {
          show: false
        },
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: '#ffffff',
          }
        },

      },
      yAxis: {
        name: 'crossK(d)',
        axisLabel: {
          formatter: function (val) {
            return val;
          }
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return params.value;
            }
          }
        },
        splitNumber: 3,
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#ffffff',
          }
        },
      },
      series: [{
        name: 'L',
        type: 'line',
        data: data.map(function (item,index) {
          return item.l-index*Math.random();
        }),
        lineStyle: {
          opacity: 0
        },
        stack: 'confidence-band',
        symbol: 'none'
      }, {
        name: 'U',
        type: 'line',
        data: data.map(function (item,index) {
          return (item.u-item.l+index*Math.random());
        }),
        lineStyle: {
          opacity: 0
        },
        areaStyle: {
          color: '#ccc'
        },
        stack: 'confidence-band',
        symbol: 'none'
      }, {
        type: 'line',
        data: data.map(function (item) {
          return item.value;
        }),
        hoverAnimation: false,
        symbolSize: 6,
        itemStyle: {
          color: '#c23531'
        },
        showSymbol: false
      }],
    };
    // 三维的数据源是 ../common/result.json
    let option3D = {
      title: {
        text: `${time.getFullYear()}-${this.fill0(time.getMonth() + 1)}-${this.fill0(time.getDate())}` +
          `\n${this.fill0(time.getHours())}:${this.fill0(time.getMinutes())}`,
        textStyle: {
          color: '#ccc',
          fontSize: 10
        },
        x: 'center',
        y: 'bottom'
      },
      tooltip: {},
      legend: {
        show: true,
        textStyle: {
          color: '#fff'
        },
        left: 50,

      },
      backgroundColor: 'rgba(0,0,0,0)',
      xAxis3D: {
        name: 'X: Temporal Distance (Month)',
        type: 'value',
        nameTextStyle: {
          color: '#fff',
          fontSize: 6
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
          fontSize: 6
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
          fontSize: 6
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
        boxWidth: 100,
        boxDepth: 100,
        boxHeight: 100,
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

    return option2D;
  }

  fill0 = (number) => {
    if (number < 10) {
      return '0' + number;
    } else {
      return number.toString();
    }
  };

  render() {
    // const dataJson = this.props.calResult;
    return (<div>
      <h3>结果展示</h3>
      <div className="results-container">
        {
          calResults.map((data, key) => (
            <ReactEcharts
              key={key}
              option={this.getOption(data)}
              theme="Imooc"
              style={{ height: '200px', width: '290px' }} />
          ))
        }
      </div>
    </div>)
  }
}
