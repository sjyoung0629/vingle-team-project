import React, { Component } from 'react';
import Dropdown from '../Ui/Dropdown';
import Dimm from '../Ui/Dimm';

class CardUser extends Component {
  state = {
    cnt: 0,
    isLike: false,
    dropdown: false,
  }
  openDropdown = () =>{
    this.setState({
      dropdown: true
    });
  }
  closeDropdown = () =>{
    this.setState({
      dropdown: false
    });
  }

  likeThis = () =>{
    let likeCnt = this.state.cnt;

    if (this.state.isLike) {
      likeCnt--;
    } else {
      likeCnt++;
    }
    this.setState({
      isLike: !this.state.isLike,
      cnt: likeCnt
    })
  }

  render() {
    return (
      <>
        {/* 카드 :: 유틸 - 좋아요, 댓글, 보내기 */}
        <div className="util">
          
          {/* 좋아요 */}
          <div className="liked">
            <button type="button" onClick={this.likeThis}>
              <i className={this.state.isLike ? 'fas fa-heart' : 'far fa-heart'}></i>
              <span className="label">
                {this.state.cnt === 0 
                  ? '좋아요'
                  : this.state.cnt
                }
              </span>
            </button>
          </div>
          
          {/* 댓글 */}
          <div className="reply"><button type="button"><i className="far fa-comments"></i>댓글</button></div>

          {/* 보내기 - 컬렉션 저장, 새카드에 공유하며 작성, SNS공유 */}
          <div className="share">
            <div className="dropdownGroup">
              <button type="button" onClick={this.openDropdown}><i className="fas fa-share-alt"></i><span className="label">보내기</span></button>
              {/* 글로벌 기능 :: 드롭다운 */}
              {this.state.dropdown &&
                <>
                  <Dropdown type="utilShare" />
                  <Dimm close={this.closeDropdown} />
                </>
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardUser;