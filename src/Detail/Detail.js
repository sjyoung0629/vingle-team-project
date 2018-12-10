import React, { Component } from 'react';
import '../Detail/Detail.scss';


class Detail extends Component {
  state = {
    detail: false,
  }
  static defaultProps = {
    close: () => {},
  }

  render() {
    const {
      close
    } = this.props
    
    return (
      <div id="detail" onClick={() => close()}>상세내용</div>
    );
  }
}

export default Detail;