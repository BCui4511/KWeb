import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Parameter.css';
import { Select } from 'antd';
import { InputNumber } from 'antd';
const { Option } = Select;

export default class Parameter extends React.Component {
  render() {
    return( 
        <div >K函数参数设置
            <p className="Parameter">
            K函数类别
            <Select defaultValue="Cross_K"  className="Parameter-Select"  >
                <Option value="Cross_K">交叉K函数</Option>
                <Option value="ST_K">时空K函数</Option>
                <Option value="S_K" >空间K函数</Option>
            </Select>
            </p>
            <p className="Parameter">入参
            <Select defaultValue="one" className="Parameter-Select" >
                <Option value="one">第一产业</Option>
                <Option value="two">第二产业</Option>
                <Option value="three" >第三产业</Option>
            </Select>
            <Select defaultValue="one" className="Parameter-Unit-Select">
                <Option value="one">第一产业</Option>
                <Option value="two">第二产业</Option>
                <Option value="three" >第三产业</Option>
            </Select>
            </p>
            <p className="Parameter">最大距离
            <InputNumber min={1} max={100000} defaultValue={2000}  className="Parameter-Select"/>
            <Select defaultValue="m"  className="Parameter-Unit-Select">
                <Option value="m">m</Option>
                <Option value="km">km</Option>
            </Select>
            </p>
            <p className="Parameter">步长
            <InputNumber min={1} max={100000} defaultValue={20} className="Parameter-Select" />
            <Select defaultValue="m"  className="Parameter-Unit-Select" >
                <Option value="m">m</Option>
                <Option value="km">km</Option>
            </Select>
            </p>
            <p className="Parameter">模拟次数
            <InputNumber min={1} max={1000} defaultValue={100} className="Parameter-Select" />
            </p>
        </div>
    );
  }
}

