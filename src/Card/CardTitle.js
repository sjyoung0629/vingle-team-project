import React, { Component } from 'react';
import Detail from '../Detail/Detail';

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

  goCommentView = () => {
    const cardID = this.props.id;
    this.props.history.push('/posts/' + cardID);
  }

  render() {
    return (
      <>
        {/* 카드 :: 제목 */}
        <div className="title" onClick={this.goCommentView}>카드 제목</div>
        {this.state.detail && 
            <Detail close={this.closeDetail} />
        }
      </>
    );
  }
}

export default CardUser;