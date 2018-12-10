import React, { Component } from 'react';

class Popup extends Component {
  state = {
    popup: false,
    selected: '',
  }
  static defaultProps = {
    title: '',
    label:'',
    name: '',
    for: '',
    inner: '',
    id: '',
    close: () => {},
  }
  chkReport = (e)=>{
    this.setState({ selected: e.target.id })
  }

  constructor(props) {
    super(props);
    this.state = {
        userReport: [
          {label:'스팸, 광고', name:'user_report', for:'report_1', id:0}, 
          {label:'외설적인 내용', name:'user_report', for:'report_2', id:1}, 
          {label:'폭력적인 콘텐츠', name:'user_report', for:'report_3', id:2}, 
          {label:'타인을 괴롭힘', name:'user_report', for:'report_4', id:3}, 
          {label:'관련없는 관심사에 발행함', name:'user_report', for:'report_5', id:4,
            inner: [
              {label:'창작문예', name:'report_cont', for:'cont_1', id:0}, 
              {label:'일기', name:'report_cont', for:'cont_2', id:1}, 
              {label:'시', name:'report_cont', for:'cont_3', id:2}, 
              {label:'영감을주는이야기', name:'report_cont', for:'cont_4', id:3}, 
              {label:'철학', name:'report_cont', for:'cont_5', id:4}, 
              {label:'자기계발', name:'report_cont', for:'cont_6', id:5}, 
              {label:'어록', name:'report_cont', for:'cont_7', id:6}, 
              {label:'한국음식', name:'report_cont', for:'cont_8', id:7}, 
              {label:'음식', name:'report_cont', for:'cont_9', id:8}, 
            ]
          }, 
          {label:'기타', name:'user_report', for:'report_6', id:5}, 
        ],
    };
  }
  
  render() {
    const {
      close,
    } = this.props
    
    return (
      <div id="popup">
        <div className="box">
          <div className="frame">
            <button type="button" className="btnClose" onClick={() => close()}><i className="fas fa-times"></i><span className="blind">닫기</span></button>
            <div className="title">{this.props.title}</div>
            <div className="entry">

            {/* 카드-유저-신고 */}
            {this.props.type === 'report' && 
            <>
              <div className="popupList radio" onChange={this.chkReport}>

                {this.state.userReport.map((report, i) => {
                  return (<PopupItem label={report.label}
                                      name={report.name}
                                      for={report.for}
                                      key={report.id}/>);
                })}

                {/* 사유5 : 무관한 관심사 */}
                {this.state.selected === 'report_5' && 
                  <div className="popupList checkbox">
                    <p><strong>이 콘텐츠와 관련없는 관심사를 선택하세요.</strong></p>
                    {this.state.userReport[4].inner.map((cont, i) => {
                      return (<PopupInnerItem label={cont.label}
                                          name={cont.name}
                                          for={cont.for}
                                          key={cont.id}/>);
                    })}
                  </div>
                }

                {/* 사유6 : 직접작성 */}
                {this.state.selected === 'report_6' && 
                  <div className="popupList">
                    <p><strong>신고하는 이유가 무엇인가요? (최대 50자)</strong></p>
                    <textarea name="report_reason" id="report_reason" className="textarea" placeholder="이유를 입력해주세요"></textarea>
                  </div>
                }

              </div>
            </>
            }

            </div>
            <div className="btns">
              <button type="button" className="btn" onClick={() => close()}>취소</button>
              <button type="button" className="btn red">확인</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class PopupItem extends Component {
  render() {
    return (
      <div className="item">
        <input type="radio" name={this.props.name} id={this.props.for} />
        <label htmlFor={this.props.for}>{this.props.label}</label>
      </div>
    );
  }
}

class PopupInnerItem extends Component {
  render() {
    return (
      <div className="item">
        <input type="checkbox" name={this.props.name} id={this.props.for} />
        <label htmlFor={this.props.for}>{this.props.label}</label>
      </div>
    );
  }
}

export default Popup;