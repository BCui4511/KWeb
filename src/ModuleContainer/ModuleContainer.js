import React from 'react'
import './ModuleContainer.css';
import intl from 'react-intl-universal';

export default class ModuleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: props.close ? false : true,
    };
  };
  changeShowTag = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    const { autowidth, children, title, right, dark, hidden } = this.props;
    const { isShow } = this.state;
    return <div className={`margin-top ${hidden ? 'hidden' : ''}`}>
      <div className={`moudle ${autowidth ? '' : 'fix-width'} ${isShow ? '' : 'unshow'} ${dark ? 'dark' : ''} ${right ? 'right-module' : ''}`}>
        <div className="close-button" onClick={this.changeShowTag}>{intl.get('CLOSE')}</div>
        {children}
      </div>
      <div className={`title moudle ${isShow ? 'unshow' : ''} ${right ? 'right' : ''}`} onClick={this.changeShowTag}>{title}</div>
    </div>
  }
}