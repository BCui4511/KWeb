import React from 'react'
import Child from './Child';
import { DatePicker } from 'antd';

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
      <p>介绍</p>
      <button onClick={this.handleAdd}>点我</button>
      <p>{this.state.count}</p>
      <Child name={this.state.count}/>
      <DatePicker />
      </div>
  }
}