import React, { Component } from 'react';
import './Write.scss';


class Write extends Component {
  state = {
    Write: false,
  }

  render() {
    return (
      <div id="write" onClick={this.props.close}><input value="카드작성/수정" /></div>
    );
  }
}

export default Write;