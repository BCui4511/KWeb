import React from 'react';
import './DataRange.css';
import { Select, Radio, DatePicker } from 'antd';
import intl from 'react-intl-universal';

const { RangePicker } = DatePicker;

export default class DataRange extends React.Component {
  render() {
    const subRanges = ['重庆', '湖北', '北京', '天津', '上海', '四川', '...'];
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
      float: 'left',
      marginLeft: '5px',
    };
    const dateFormat = 'YYYY/MM/DD';
    return <div className="data-range">
      <h3>{intl.get('ST_RANGE')}</h3>
      <div className="option-name">{intl.get('GEO_EXTENT')}</div><br />
      <Radio.Group >
        <Radio style={radioStyle} value={1}>
          <span className='radio-text'>{intl.get('CUSTOMIZED')}</span>
          <Select className="data-select" placeholder={subRanges[0]}>
            {
              subRanges.length && subRanges.map((item, index) => (
                <Select.Option key={index} value={item}>{item}</Select.Option>)
              )
            }
          </Select>
        </Radio>
        <Radio style={radioStyle} value={2}>
          <span className='radio-text'>{intl.get('DEFAULT')}</span>
        </Radio>
      </Radio.Group><br />
      <div className="option-name">{intl.get('TIME_RANGE')}</div><br />
      <Radio.Group >
        <Radio style={radioStyle} value={1}>
          <span className='radio-text'>{intl.get('CUSTOMIZED')}</span>
          <RangePicker style={{ width: '185px', marginLeft: '3px' }} format={dateFormat} />
        </Radio>
        <Radio style={radioStyle} value={2}>
          <span className='radio-text'>{intl.get('DEFAULT')}</span>
        </Radio>
      </Radio.Group>

    </div>
  }
}
