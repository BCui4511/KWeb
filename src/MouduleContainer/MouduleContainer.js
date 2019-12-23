import React from 'react'
import './MouduleContainer.css';

export default class MouduleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  };
  changeShowTag=()=>{
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    return <div className="margin-top">
      <div className={`moudle ${this.props.autowidth ? '' : 'fix-width'} ${this.state.isShow ? '' : 'unshow'}` }>
        <div className="close-button" onClick={this.changeShowTag}>关闭</div>
        {this.props.children}
      </div>
      <div className={`title moudle ${this.state.isShow ? 'unshow' :''}`} onClick={this.changeShowTag}>{this.props.title}</div> 
      </div>
  }
}