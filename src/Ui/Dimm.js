import React, { Component } from 'react';

class Confirm extends Component {
  state = {
    dimm: false,
  }
  static defaultProps = {
    close: () => {},
  }
  
  render() {
    const {
      close
    } = this.props
    
    return (
      <div id="dimm" onClick={() => close()}></div>
    );
  }
}

export default Confirm;