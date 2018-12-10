import React, { Component } from 'react';
import Detail from '../Detail/Detail';
import {BrowserRouter as Link} from 'react-router-dom';

class CardUser extends Component {
  state = {
    detail: false,
  }

  openDetail = () =>{
    this.setState({detail: true});
  }
  closeDetail = () =>{
    this.setState({detail: false});
  }

  render() {
    return (
      <>
        {/* 카드 :: 제목 */}
        <Link to="/commentView/1">
          <div className="title" onClick={this.openDetail}>카드 제목</div>
        </Link>
        {this.state.detail && 
            <Detail close={this.closeDetail} />
        }
      </>
    );
  }
}

export default CardUser;