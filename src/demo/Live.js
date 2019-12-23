import React from 'react'
import Child from './Child';
import Area from '../Area/Area'
import { DatePicker } from 'antd';
import './Live.css';

export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleAdd=()=>{
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return <div>
      <p className="example">点数据展示模块</p>
      <button onClick={this.handleAdd}>点我</button>
      <p>{this.state.count}</p>
      <Child name={this.state.count}/>
      <DatePicker />
      <Area />
      </div>
  }
}