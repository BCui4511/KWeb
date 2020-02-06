import React from 'react';

//导入折线图
import 'echarts/lib/chart/pie';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';

export default class DataIntro extends React.Component {

  getOption =()=> {
    let option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} <br/> {c} ({d}%)'
    },
    series: [
        {
            name: '企业数据',
            type: 'pie',
            radius: '55%',
            center: ['50%', '45%'],
            data: [
                {value: 33524, name: '第一产业', itemStyle: {color: '#ff0000'}},
                {value: 31023, name: '第二产业', itemStyle: {color: '#00ff00'}},
                {value: 23544, name: '第三产业', itemStyle: {color: '#0000ff'}},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
    }
   return option
  }

  render() {
    return <div>
        <h3>数据概况</h3>
        <ReactEcharts option={this.getOption()} theme="Imooc"  style={{height:'200px'}}/>
      </div>
  }
}
