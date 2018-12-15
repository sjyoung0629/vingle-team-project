import React, { Component } from 'react';
import Dimm from '../Ui/Dimm';
import axios from 'axios';

function like(id, cnt) {
  axios.put(`http://dev-jolse.iptime.org:9000/feed/${id}`, id, cnt).then((response) => {
    console.log(id, cnt)
  });
}

class CardUser extends Component {
  state = {
    cnt: 0,
    isLike: false,
    dropdown: false,
  }

  componentDidMount (){
    this.setState({
      cnt: this.props.liked
    })
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
    let likeCnt = this.state.cnt,
        id = this.props.id;

    if (this.state.isLike) {
      likeCnt--;
    } else {
      likeCnt++;
    }
    this.setState({
      isLike: !this.state.isLike,
      cnt: likeCnt
    });

    like(id, likeCnt);
    
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
          <div className="reply"><button type="button" onClick={this.props.view}><i className="far fa-comments"></i>댓글</button></div>

          {/* 보내기 - 컬렉션 저장, 새카드에 공유하며 작성, SNS공유 */}
          <div className="share">
            <div className="dropdownGroup">
              <button type="button" onClick={this.openDropdown}><i className="fas fa-share-alt"></i><span className="label">보내기</span></button>
              {/* 글로벌 기능 :: 드롭다운 */}
              {this.state.dropdown &&
                <>
                  <Dropdown confirm={this.props.confirm} 
                            popup={this.props.popup} 
                            completeMsg={this.props.completeMsg}
                            write={this.props.write} />
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

class Dropdown extends Component {
  state = {
    dropdown: false,
    utilDropdown: [
      {name:'다른 컬렉션 선택', ico:'fas fa-plus-square', extra:'more', evt:'popup', id:'collections', tit:'컬렉션 선택'},
      {name:'기본 컬렉션에 저장하기', ico:'fas fa-paperclip', evt:'toast', msg: '컬렉션에 저장 되었습니다.'},
      {name:'카드에 작성하기', ico:'fas fa-pencil-alt', evt:'write'},
      {name:'외부에 공유하기', ico:'fas fa-external-link-alt', evt:'popup', id:'share', tit:'외부 서비스로 공유하기'},
    ],
  }

  static defaultProps = {
    name: '',
    ico: '',
    id: '',
    extra:'',
    evt:'',
  }
  
  render() {
    
    return (
      <div className="dropdown">
        {this.state.utilDropdown.map((util, i) => {
            return (<DropdownItem name={util.name}
                                  evt={util.evt}
                                  act={util.id}
                                  tit={util.tit}
                                  msg={util.msg}
                                  confirm={this.props.confirm}
                                  popup={this.props.popup}
                                  completeMsg={this.props.completeMsg}
                                  write={this.props.write}
                                  ico={util.ico}
                                  extra={util.extra}
                                  key={i}/>);
        })}
      </div>
    );
  }
}

class DropdownItem extends Component {
  
  utilEvt = () =>{
    let evt = this.props.evt,
        act = this.props.act,
        tit = this.props.tit,
        tstmsg = this.props.msg;

    if (evt === 'confirm') {
      this.props.confirm(act, tit)
    }
    if (evt === 'popup') {
      this.props.popup(act, tit)
    }
    if (evt === 'toast') {
      this.props.completeMsg(tstmsg)
    }
    if (evt === 'write') {
      this.props.write()
    }
  }

  render() {

    return (
      <div className={this.props.extra ? 'extraItem' : 'item'}>
        <button type="button" title={this.props.name} className={this.props.extra} onClick={this.utilEvt}>
          {this.props.ico &&
            <i className={this.props.ico}></i>
           }
          <span className={this.props.extra && 'blind'}>{this.props.name}</span>
        </button>
      </div>
    );
  }
}

export default CardUser;