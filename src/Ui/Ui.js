import React, { Component } from 'react';
import Toast from './Toast';
import Popup from './Popup';
import './Ui.scss';

class Ui extends Component {
  render() {
    return (
      <fragment>
        <Toast
          msg={this.props.toastMsg}
         />
        <Popup
          title={this.props.popupTitle}
          html={this.props.popupHtml}
         />
      </fragment>
    );
  }
}

export default Ui;