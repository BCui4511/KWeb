import React from 'react';
import './CalcuInfo.css';
import { Button, Progress } from 'antd';
import { getURLWithParam } from '../common/tool';
import ReactEcharts from 'echarts-for-react';
// import calResult from '../common/result.json';

const CALCUSTATE = {
  BEFRORECALCU: 0,
  PARAMERROR: -1,
  CALCUING: 1,
  FINISHED: 2,
  SERVERERROR: -2,
};

export default class CalcuInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcuState: CALCUSTATE.BEFRORECALCU,
      percent:0,
      data2:[50,80,40,60,50,70],
      data1:[1,2,3,4,5,6],
      data22:[],
      data11:[]
    };
  };

  
  
  componentDidMount(){
    this.timer = setInterval(()=>{
      let xaxisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
      let yaxisData = 70+Math.round(Math.random() * 30);
      this.setState({
        data11:this.state.data1,
        data22:this.state.data2
      })
      this.state.data22.shift();
      this.state.data11.shift();
      
      this.setState(prevState => ({
        data1:prevState.data11.concat(xaxisData),
        data2:prevState.data22.concat(yaxisData)
      }))
      // console.log(this.state.data2);

    },500)
  }



  shouldComponentUpdate(data2,nextState){
    if(data2 === this.state.data2){
      return false
    }
    return true
  }



  getOption(){
    return {
      tooltip:{
        trigger:'axis',
        axisPointer:{
          type:'cross',
          label:{
            backgroundColor:'#283b56'
          }
        }
      },
      grid:{
        left:25,
        top:10,
        bottom:20,
        right:10,
      },
      opacity:20,
      xAxis:[
        {
          type: 'category',
          boundaryGap: true,
          splitNumber:6,
          
          axisLabel:{
            show: false,
            textStyle: {
              color: 'rgb(150,150,150)',
              fontSize:'1'
            }
          },
          axisLine:{
            lineStyle:{
              color:'rgb(150,150,150)',
              width:1
            }
          },
          data:this.state.data1
        }
      ],
      yAxis:{
        axisLabel:{
          margin:2,
          color:'rgb(150,150,150)'
        },
        axisLine:{
          lineStyle:{
            color:'rgb(150,150,150)',
            width:1.5
          }
        },
        max:100,
        splitNumber:6
      },
      series:[
        {
          name: 'CPU占用',
          type: 'line',
          lineStyle:{
            color:'rgb(50,200,50)'
          },
          data:this.state.data2,
          center: ['90%', '100%'],
        }
      ],

    }
  }


  startCalcu = () => {
    const params = this.props.params;
    const {KType, DataCate, SpatialMax, TimeMax, SpatialStep, TimeStep, simuTime} = params;
    console.log(this.props.params);
    if(KType === 'Cross'){
     if(params.DataCate[0] === params.DataCate[1]){
        alert('交叉K函数入参点数据类型不能相同');
        return false;
      }
    }
    const commitParam = {
      dataSize: 50000,
      maxSpatialDistance: 20,
      maxTemporalDistance: 20,
      spatialStep: 20,
      temporalStep: 20,
      numExecutors: 8,
      executorCores: 8,
      executorMemory: '14g',
    };
    const url = 'http://192.168.200.179:8080/GeoCommerceService/submit.do';
    const urlParam = getURLWithParam(url, commitParam);
    console.log('request url', urlParam);
    // 能正确请求到结果
    fetch(urlParam)
   .then((response) => response.json())
   .then((responseJson) => {
    this.props.getCalResult(responseJson);
    console.log(responseJson.maxSpatialDistance);
   })
   .catch((error) => {
    console.error('请求计算结果出错', error);
   });
    this.setState({calcuState: CALCUSTATE.CALCUING, percent: 0}, this.changePercent);
 
  }

  changePercent = () => {
    if(this.state.percent < 100) {
      setTimeout(()=>{
        this.setState({percent: this.state.percent + 1})
        this.changePercent();
      }, 500);
    } else{
      this.setState({calcuState: CALCUSTATE.FINISHED});
      // 先使用示例数据
      // this.props.getCalResult(calResult);
    }
  }

  render() {
    
    return <div className="calcuInfo">
        <h3>集群计算信息</h3>
        { 
          this.state.calcuState === CALCUSTATE.BEFRORECALCU &&
            <Button onClick={this.startCalcu}>点击开始计算</Button>
        }
        { 
          (this.state.calcuState === CALCUSTATE.CALCUING || this.state.calcuState === CALCUSTATE.FINISHED)&&
          <div >
            <div className="cal-progress">
            <Progress percent={this.state.percent}/>
            <br/> 计算中...<br/>
            </div>
            <ReactEcharts 
              option={this.getOption()} 
              notMerge={true} 
              lazyUpdate={true}
              style={{ height: '100px' }}
            />
            <Button>查看详情</Button> {this.state.calcuState === CALCUSTATE.FINISHED && <Button onClick={this.startCalcu}>重新计算</Button>}
          </div>
        }
       
      </div>
      
  }
}