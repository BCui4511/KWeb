import React from 'react';
import './DataSource.css';
import { Select, Upload, Button, Icon } from 'antd';
import intl from 'react-intl-universal';

export default class DataSource extends React.Component {
  render() {
    const dataSources = ['全国企业POI', '重庆市企业POI', '...'];

    // 上传
    // const props = {
    //   name: 'file',
    //   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //   headers: {
    //     authorization: 'authorization-text',
    //   },
    //   onChange(info) {
    //     if (info.file.status !== 'uploading') {
    //       console.log(info.file, info.fileList);
    //     }
    //     if (info.file.status === 'done') {
    //       message.success(`${info.file.name} file uploaded successfully`);
    //     } else if (info.file.status === 'error') {
    //       message.error(`${info.file.name} file upload failed.`);
    //     }
    //   },
    // };

    return <div>
      <h3>{intl.get('DATA_SOURCE')}</h3>
      <div className="data-option">{intl.get('SELECT_DATA')}
        <Select className="data-source-button" placeholder={dataSources[0]}>
          {
            dataSources.length && dataSources.map((item, index) => (
              <Select.Option key={index} value={item}>{item}</Select.Option>)
            )
          }
        </Select>
      </div>
      <div className="data-option">{intl.get('UPLOAD_DATA')}
        <Upload className="data-source-button" >
          <Button style={{ width: '150px' }}>
            <Icon type="upload" /> Click to Upload
            </Button>
        </Upload>
      </div>
    </div>
  }
}
