import React, { Component } from 'react';
import Dimm from '../Ui/Dimm';

class CardUser extends Component {
  state = {
    isFollow: false,
    dropdown: false,
    time: '2018-12-12',
  }


  componentDidMount (){
    this.setState({
      time: this.props.time.substring(0, 10)
    })
  }
  
  followUser = () =>{
    this.setState({
      isFollow: !this.state.isFollow,
    });
  }

  openDropdown = () =>{
    this.setState({
      dropdown: true,
    });
  }
  closeDropdown = () =>{
    this.setState({
      dropdown: false
    });
  }

  

  render() {
    const {
      time,
    } = this.state;
    

    return (
      <>

        {/* 카드 :: 유저인포 */}
        <div className="user">
          <div className="img"><a href="#"><img src="https://media.vingle.net/images/us_l/w5w8vzbw6j.jpg" alt="" /></a></div>
          <div className="info">
            <div className="name"><a href="#">작성자명 데이터 필요해요</a></div>
            <div className="time">{time}</div>
          </div>
          <div className="follow">
            <button type="button" 
                    className={this.state.isFollow ? 'active' : ''} 
                    onClick={this.followUser}>
                    {this.state.isFollow 
                      ? '팔로잉'
                      : '+ 팔로우'
                    }
            </button>
          </div>
          <div className="more">
            <div className="dropdownGroup">
              <button type="button" onClick={this.openDropdown}><i className="fas fa-ellipsis-h"></i><span className="blind">더보기</span></button>
              {/* 글로벌 기능 :: 드롭다운 */}
              {this.state.dropdown && 
                <>
                  <Dropdown confirm={this.props.confirm} 
                            popup={this.props.popup}
                            completeMsg={this.props.completeMsg}
                            write={this.props.write}
                   />
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
    userDropdown: [
      {name:'이 유저 뮤트하기', evt:'confirm', id:'mute', tit:'이 유저 뮤트하기', cont:'뮤트하면 더 이상 이 회원의 카드가 피드에 나타나지 않습니다. 뮤트하시겠어요?'},
      {name:'신고하기', evt:'popup', id:'report', tit:'이 콘텐츠를 신고하는 이유는 무엇인가요?'},
      {name:'수정하기', evt:'write', id:'modify'},
      {name:'삭제하기', evt:'confirm', id:'del', tit:'삭제하기', cont:'정말 이 카드를 삭제하시겠습니까?'},
    ],
  }

  static defaultProps = {
    name: '',
    ico: '',
    id: '',
    extra:'',
    evt:'',
    ok:'',
  }
  
  render() {

    
    return (
      <div className="dropdown">
        {/* 카드-유저-더보기 */}
        <>
          {this.state.userDropdown.map((user, i) => {
              return (<DropdownItem name={user.name}
                                    evt={user.evt}
                                    act={user.id}
                                    tit={user.tit}
                                    cont={user.cont}
                                    msg={user.msg}
                                    confirm={this.props.confirm}
                                    popup={this.props.popup}
                                    completeMsg={this.props.completeMsg}
                                    write={this.props.write}
                                    key={i}/>);
          })}
        </>
      </div>
    );
  }
}

class DropdownItem extends Component {
  state = {
    msg: '',
  }
  utilEvt = () =>{
    let evt = this.props.evt,
        act = this.props.act,
        tit = this.props.tit,
        cont = this.props.cont,
        tstmsg = this.props.msg;

    if (evt === 'confirm') {
      this.props.confirm(act, tit, cont);
    }
    if (evt === 'popup') {
      this.props.popup(act, tit);
    }
    if (evt === 'toast') {
      this.props.completeMsg(tstmsg);
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