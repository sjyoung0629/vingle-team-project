import React, { Component } from 'react';
import Dropdown from '../Ui/Dropdown';
import Dimm from '../Ui/Dimm';

class CardUser extends Component {
  state = {
    isFollow: false,
    dropdown: false,
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
    return (
      <>
        {/* 카드 :: 유저인포 */}
        <div className="user clear">
          <div className="img"><a href="#"><img src="https://media.vingle.net/images/us_l/w5w8vzbw6j.jpg" alt="" /></a></div>
          <div className="info">
            <div className="name"><a href="#">user name</a></div>
            <div className="time">1분 전</div>
          </div>
          <div className="follow">
            <button type="button" 
                    className={this.state.isFollow ? 'active' : ''} 
                    onClick={this.followUser}>
                    {this.state.isFollow ? '팔로잉' : '+ 팔로우'}
            </button>
          </div>
          <div className="more">
            <div className="dropdownGroup">
              <button type="button" onClick={this.openDropdown}><i className="fas fa-ellipsis-h"></i><span className="blind">더보기</span></button>
              {/* 글로벌 기능 :: 드롭다운 */}
              {this.state.dropdown && 
                <>
                  <Dropdown type='userInfo' />
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