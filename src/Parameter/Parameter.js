import React from 'react';
import 'antd/dist/antd.css';
import './Parameter.css';
import { Select } from 'antd';
import { InputNumber } from 'antd';

export default class Parameter extends React.Component {
    state={
        CK_isdisabled: true,
        STK_isdisabled: true,
    };     
    handleChange(value) {
        if(value==="交叉K函数"){
            this.setState({CK_isdisabled: false});
        }else{
            this.setState({CK_isdisabled: true});
        }  
        if(value==="时空K函数"){
            this.setState({STK_isdisabled: false});
        }else{
            this.setState({STK_isdisabled: true});
        }  
    }  
      
    render() {
        const { Option } = Select;
        const {CK_isdisabled} = this.state;
        const {STK_isdisabled} = this.state;
        const functionList = ['空间K函数', '时空K函数', '交叉K函数'];
        const industryList = ['第一产业', '第二产业', '第三产业'];
        const industryList2 = ['第一产业', '第二产业', '第三产业'];
    return(     
        <div>
            <h3>K函数参数设置</h3>
            
            <div className="parameter-option-name">K函数类别
                <Select placeholder={functionList[0]} style={{width:"115px"}} className="parameter-select"  onChange={this.handleChange.bind(this)} >
                    {
                    functionList.length && functionList.map((item, index) => (
                    <Select.Option key={index} value={item}>{item}</Select.Option>)
                    )
                    }
                </Select>
            </div>
            
            <div className="parameter-option-name">入参
            <Select placeholder={industryList[0]} style={{width:"95px"}} className="parameter-select" >
                    {
                    industryList.length && industryList.map((item, index) => (
                    <Select.Option key={index} value={item}>{item}</Select.Option>)
                    )
                    }
                </Select>
                <Select placeholder={industryList[0]} style={{width:"95px"}} disabled={CK_isdisabled} className="parameter-unit-select">
                    {
                    industryList.length && industryList.map((item, index) => (
                    <Select.Option key={index} value={item}>{item}</Select.Option>)
                    )
                    }
                </Select>
            </div>
            <div className="parameter-option-name">最大空间距离
            <InputNumber min={1} max={100000} defaultValue={2000}  className="parameter-select"/>
            <Select defaultValue="m"  className="parameter-unit-select">
                <Option value="m">m</Option>
                <Option value="km">km</Option>
            </Select>
            </div>
            <div className="parameter-option-name">最大时间范围
            <InputNumber min={1} max={100} defaultValue={10} disabled={STK_isdisabled} className="parameter-select"/>
            <Select defaultValue="month"  className="parameter-unit-select">
                <Option value="day">day</Option>
                <Option value="month">month</Option>
            </Select>
            </div>
            <div className="parameter-option-name">空间步长
            <InputNumber min={1} max={100000} defaultValue={20} className="parameter-select" />
            <Select defaultValue="m" className="parameter-unit-select" >
                <Option value="m">m</Option>
                <Option value="km">km</Option>
            </Select>
            </div>
            <div className="parameter-option-name">时间步长           
            <InputNumber min={1} max={100000} defaultValue={1} disabled={STK_isdisabled} className="parameter-select" />
            <Select defaultValue="month"   className="parameter-unit-select" >
                <Option value="day">day</Option>
                <Option value="month">month</Option>
            </Select>
            </div>
            <div  className="parameter-option-name">模拟次数
            <InputNumber stlye={{top:"-25px"}} min={1} max={1000} defaultValue={100} className="parameter-select" />
            </div>           
        </div>
    );
  }
}

