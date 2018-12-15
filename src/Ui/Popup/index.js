import React, { Component } from 'react';
import UserReport from './UserReport';
import Collections from './Collections';
import Share from './Share';

class Popup extends Component {
  state = {
    popup: false,
    type: '',
    checked: '',
  }
  static defaultProps = {
    title: '',
    isBtn:'',
  }

  completeMsg = ()=>{
    let msg = this.props.msg;
    msg = '신고되었습니다.'
    this.props.completeMsg(msg);
    this.props.close();
  }

  closeDimm = (e)=>{
    let dimm = e.target.className;
    if (dimm === 'box') {
      this.props.close();
    }
  }

  render() {
    
    return (
      
      <div id="popup" onClick={this.closeDimm}>
        <div className="box">
          <div className="frame">
            <button type="button" className="btnClose" onClick={this.props.close}><i className="fas fa-times"></i><span className="blind">닫기</span></button>
            <div className="title">{this.props.title}</div>

            {/* 카드-유저-신고 */}
            {this.props.type === 'report' && 
              <UserReport completeMsg={this.props.completeMsg}
                          close={this.props.close}
                />
            }

            {/* 컬렉션 선택 */}
            {this.props.type === 'collections' && 
              <Collections completeMsg={this.props.completeMsg}
                            close={this.props.close}
                />
            }

            {/* 외부 서비스로 공유하기 */}
            {this.props.type === 'share' && 
              <Share completeMsg={this.props.completeMsg}
                            close={this.props.close}
                />
            }

          </div>
        </div>
      </div>
      
    );
  }
}

export default Popup;