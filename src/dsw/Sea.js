import React from "react";
import ReactDOM from "react-dom";
import { version } from "antd";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button } from 'antd';
import { Radio} from 'antd';
import { DatePicker, message} from 'antd';

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
    };
    const menu = (
    <Menu>
    <Menu.Item key="1">
    重庆
    </Menu.Item>
    <Menu.Item key="2">
    安徽
    </Menu.Item>
    <Menu.Item key="3">
    北京
    </Menu.Item>
    <Menu.Item key="4">
    福建
    </Menu.Item>
    <Menu.Item key="5">
    甘肃
    </Menu.Item>
    <Menu.Item key="6">
    广东
    </Menu.Item>
    <Menu.Item key="7">
    广西
    </Menu.Item>
    <Menu.Item key="8">
    贵州
    </Menu.Item>
    <Menu.Item key="9">
    海南
    </Menu.Item>
    <Menu.Item key="10">
    河北
    </Menu.Item>
    <Menu.Item key="11">
    河南
    </Menu.Item>
    <Menu.Item key="12">
    黑龙江
    </Menu.Item>
    <Menu.Item key="13">
    湖北
    </Menu.Item>
    <Menu.Item key="14">
    湖南
    </Menu.Item>
    <Menu.Item key="15">
    江西
    </Menu.Item>
    <Menu.Item key="16">
    吉林
    </Menu.Item>
    <Menu.Item key="17">
    江苏
    </Menu.Item>
    <Menu.Item key="18">
    辽宁
    </Menu.Item>
    <Menu.Item key="19">
    内蒙古
    </Menu.Item>
    <Menu.Item key="20">
    宁夏
    </Menu.Item>
    <Menu.Item key="21">
    青海
    </Menu.Item>
    <Menu.Item key="22">
    山西
    </Menu.Item>
    <Menu.Item key="23">
    山东
    </Menu.Item>
    <Menu.Item key="24">
    陕西
    </Menu.Item>
    <Menu.Item key="25">
    上海
    </Menu.Item>
    <Menu.Item key="26">
    四川
    </Menu.Item>
    <Menu.Item key="27">
    天津
    </Menu.Item>
    <Menu.Item key="28">
    西藏
    </Menu.Item>
    <Menu.Item key="29">
    新疆
    </Menu.Item>
    <Menu.Item key="30">
    云南
    </Menu.Item>
    <Menu.Item key="31">
    浙江
    </Menu.Item>
    </Menu>
    );
    
    //时间选择
    const {RangePicker} = DatePicker;
    function onChange(date, dateString) {
    console.log(date, dateString);
    }
    

export default class Sea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentWillMount() {
    console.log('will mount');
  }
  componentDidMount() {
    console.log('123');
  }
  render() {
    return <div className="Research">
    <h1>研究范围</h1>
    <p>
    <b>空间范围</b>
    </p>
    <Radio>自定义区间</Radio>
    <Dropdown overlay={menu} placement="bottomRight">
    <Button>重庆</Button>
    </Dropdown>
    <br></br>
    <Radio>全域</Radio>
    <p>
    <b>时间范围</b>
    </p>
    <Radio>输入范围</Radio> <RangePicker onChange={onChange} />
    
    <br></br>
    <Radio>不限</Radio>
    </div>
    
  }
}