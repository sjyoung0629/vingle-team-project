import React, { Component } from 'react';
import CardUser from './CardUser';
import CardTitle from './CardTitle';
import CardContents from './CardContents';
import CardAddedThumb from './CardAddedThumb';
import CardAddedEmbed from './CardAddedEmbed';
import CardAddedPage from './CardAddedPage';
import CardTag from './CardTag';
import CardUtil from './CardUtil';
import Toast from '../Ui/Toast';
import Popup from '../Ui/Popup';
import Confirm from '../Ui/Confirm';

import './Card.scss';
import '../Ui/Ui.scss';


class Card extends Component {
  state = {
    toast: false,
    popup: false,
    confirm: false,
    dropdown: false,
  }

  toastMsg = ()=>{
    this.setState({
      toast: true,
    });
    setTimeout(()=> this.setState({toast: false}), 1000);
  }
  openPopup = ()=>{
    this.setState({popup: true});
  }
  closePopup = ()=>{
    this.setState({popup: false});
  }
  openConfirm = ()=>{
    this.setState({confirm: true});
  }
  closeConfirm = () =>{
    this.setState({confirm: false});
  }

  linkToDetail = () => {
  }
  

  render() {

    return (
      <>
        {/* 기능 테스트용 임시 버튼, 추후 개별 모듈화 예정 */}
        <div className="testBox">
          <p>[기능 테스트]</p>
          <button className="btn" onClick={this.toastMsg}>토스트메시지</button>
          <button className="btn" onClick={this.openConfirm}>컨펌메시지</button>
          <button className="btn" onClick={this.openPopup}>팝업</button>
        </div>


        {/* 카드 */}
        <div className="card">
          <CardUser />
          <CardTitle/>
          <CardContents/>

          {/* 카드 :: 첨부 - 최상위 첨부파일 포맷에 따라 썸네일, 임베드, 페이지링크 형태로 보여지는 화면이 나뉜다 */}
          <CardAddedThumb />
          <CardAddedEmbed />
          <CardAddedPage />

          <CardTag />

          <CardUtil />
        </div>
      
        {this.state.toast && 
          <Toast 
            msg="토스트"
          /> 
        }

        {this.state.confirm && 
          <Confirm
            title="이 유저 뮤트하기"
            html="뮤트하면 더 이상 이 회원의 카드가 피드에 나타나지 않습니다. 뮤트하시겠어요?"
            close={this.closeConfirm}
           /> 
        }
        
        {this.state.popup &&
          <Popup
            title="이 콘텐츠를 신고하는 이유는 무엇인가요?"
            type="report"
            close={this.closePopup}
          /> 
        }

      </>
    );
  }
}

export default Card;