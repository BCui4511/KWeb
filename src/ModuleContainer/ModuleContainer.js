import React from 'react'
import './ModuleContainer.css';

export default class ModuleContainer extends React.Component {
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
    const {autowidth, left, children, title} = this.props;
    const {isShow} = this.state;
    return <div className="margin-top">
      <div className={`moudle ${autowidth ? '' : 'fix-width'} ${isShow ? '' : 'unshow'}` }>
        <div className="close-button" onClick={this.changeShowTag}>关闭</div>
        {children}
      </div>
      <div className={`title moudle ${isShow ? 'unshow' :''} ${left ? 'left' : 'right'}`} onClick={this.changeShowTag}>{title}</div> 
      </div>
  }
}