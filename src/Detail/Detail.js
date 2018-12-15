import React, { Component } from 'react';
import './Detail.scss';


class Detail extends Component {
  state = {
    detail: false,
  }

  render() {
    return (
      <div id="detail" onClick={this.props.close}>상세내용</div>
    );
  }
}

export default Detail;