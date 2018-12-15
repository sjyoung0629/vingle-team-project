import React, { Component } from 'react';

class Confirm extends Component {
  state = {
    confirm: false,
    type: '',
  }
  static defaultProps = {
    title: '컨펌 제목',
    html: '컨펌 내용',
  }

  completeMsg = ()=>{
    let msg = this.props.msg,
        type = this.props.type;

    if (type === 'mute'){
      msg = '뮤트되었습니다.'
    }
    if (type === 'del'){
      msg = '삭제되었습니다.'
    }
    this.props.completeMsg(msg);
    this.props.close();
  }

  closeDimm = (e)=>{
    let dimm = e.target.className;
    if (dimm === 'box') {
      this.props.close()
    }
  }
  
  render() {
    
    return (
      <div id="confirm" onClick={this.closeDimm}>
        <div className="box">
          <div className="frame">
            <button type="button" className="btnClose" onClick={this.props.close}><i className="fas fa-times"></i><span className="blind">닫기</span></button>
            <div className="title">{this.props.title}</div>
            <div className="entry">{this.props.html}</div>
            <div className="btns">
              <button type="button" className="btn" onClick={this.props.close}>취소</button>
              <button type="button" className="btn red" onClick={this.completeMsg}>확인</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;