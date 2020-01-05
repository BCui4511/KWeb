import React from 'react';
import './CalcuInfo.css';
import { Button } from 'antd';

export default class CalcuInfo extends React.Component {
  render() {
    return <div className="calcuInfo">
        <h3>集群计算信息</h3>
        <Button>点击开始计算</Button>
      </div>
  }
}