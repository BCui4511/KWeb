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
      title: {
        text: '数据概况',
        left: 'center',
        top: 20,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['第一产业', '第二产业', '第三产业']
    },
    series: [
        {
            name: '企业数据',
            type: 'pie',
            radius: '40%',
            center: ['50%', '60%'],
            data: [
                {value: 33524, name: '第一产业'},
                {value: 31023, name: '第二产业'},
                {value: 23544, name: '第三产业'},
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
        <ReactEcharts option={this.getOption()} theme="Imooc"  style={{height:'300px'}}/>
      </div>
  }
}
