import React, { Component } from 'react';

class Toast extends Component {
  state = {
    toast: false,
  }
  static defaultProps = {
    msg: '토스트 메시지'
  }

  render() {
    return (
      <div id="toast"><p className="msg">{this.props.msg}</p></div>
    );
  }
}

export default Toast;