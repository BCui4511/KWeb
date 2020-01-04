import React from 'react'
import { Slider, Switch, Select } from 'antd';
import './VisualController.css';

export default class VisualController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // 获取滑块范围
    const slideParam = {
      max: 20,
      min: 1,
      step: 1,
    };
    const attriList = ['第一产业', '第二产业', '第三产业'];
    return <div>
      <h3>点数据展示模块</h3>
      <div className="option-name">尺度选择</div>
      <Slider className="module-slider" max={slideParam.max} min={slideParam.min} step={slideParam.step} />
      <div className="option-name">颜色设置</div>
      <div className="color-form">
        <Switch className="red" checkedChildren="红" unCheckedChildren="红" defaultChecked />
        <Select className="attri-select">
          {
            attriList.length && attriList.map((item, index) => (
              <Select.Option key={index} value={item}>{item}</Select.Option>)
            )
          }
        </Select><br/>
        <Switch className="green" checkedChildren="绿" unCheckedChildren="绿" defaultChecked />
        <Select className="attri-select">
          {
            attriList.length && attriList.map((item, index) => (
              <Select.Option key={index} value={item}>{item}</Select.Option>)
            )
          }
        </Select><br/>
        <Switch className="blue" checkedChildren="蓝" unCheckedChildren="蓝" defaultChecked />
        <Select className="attri-select">
          {
            attriList.length && attriList.map((item, index) => (
              <Select.Option key={index} value={item}>{item}</Select.Option>)
            )
          }
        </Select><br/>
      </div>
      <div style={{marginTop: "100px"}} className="option-name">维度选择</div><Switch className="dimension" checkedChildren="2D" unCheckedChildren="3D" defaultChecked />
    </div>
  }
}