import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { InputNumber } from 'antd';
const { Option } = Select;

export default class Parameter extends React.Component {
  render() {
    return( 
        <div>
            <p>
            K函数类别
            <Select defaultValue="Cross_K"  >
                <Option value="Cross_K">交叉K函数</Option>
                <Option value="ST_K">时空K函数</Option>
                <Option value="S_K" >空间K函数</Option>
            </Select>
            </p>
            <p>入参
            <Select defaultValue="one" >
                <Option value="one">第一产业</Option>
                <Option value="two">第二产业</Option>
                <Option value="three" >第三产业</Option>
            </Select>
            <Select defaultValue="one" >
                <Option value="one">第一产业</Option>
                <Option value="two">第二产业</Option>
                <Option value="three" >第三产业</Option>
            </Select>
            </p>
            <p>最大距离
                <InputNumber min={1} max={100000} defaultValue={2000}  />
                <Select defaultValue="m"  >
                    <Option value="m">m</Option>
                    <Option value="km">km</Option>
                </Select>
            </p>
            <p>步长
            <InputNumber min={1} max={100000} defaultValue={20}  />
            <Select defaultValue="m" style={{ width: 120 }}  >
            <Option value="m">m</Option>
            <Option value="km">km</Option>
            </Select>
            </p>
            <div>模拟次数
            <InputNumber min={1} max={1000} defaultValue={100}  />
            </div>,
        </div>
    );
  }
}

