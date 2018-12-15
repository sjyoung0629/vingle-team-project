import React, { Component } from 'react';

class UserReport extends Component {
  state = {
    checked: false,
    d_checked: false,
    userReport: [
      {label:'스팸, 광고', name:'user_report', for:'report_1'}, 
      {label:'외설적인 내용', name:'user_report', for:'report_2'}, 
      {label:'폭력적인 콘텐츠', name:'user_report', for:'report_3'}, 
      {label:'타인을 괴롭힘', name:'user_report', for:'report_4'}, 
      {label:'관련없는 관심사에 발행함', name:'user_report', for:'report_5',
        inner: [
          {label:'창작문예', name:'report_cont', for:'cont_1'}, 
          {label:'일기', name:'report_cont', for:'cont_2'}, 
          {label:'시', name:'report_cont', for:'cont_3'}, 
          {label:'영감을주는이야기', name:'report_cont', for:'cont_4'}, 
          {label:'철학', name:'report_cont', for:'cont_5'}, 
          {label:'자기계발', name:'report_cont', for:'cont_6'}, 
          {label:'어록', name:'report_cont', for:'cont_7'}, 
          {label:'한국음식', name:'report_cont', for:'cont_8'}, 
          {label:'음식', name:'report_cont', for:'cont_9'}, 
        ]
      }, 
      {label:'기타', name:'user_report', for:'report_6'}, 
    ],
    related: [],
  }
  static defaultProps = {
    label:'',
    name: '',
    for: '',
    inner: '',
  }

  chkReport = (e)=>{
    this.setState({
      checked: e.target.id,
      reason: e.target.value,
    });
  }

  chkReportDetail = (e)=>{
    let isChecked = e.target.checked;
    const { related } = this.state;
    if (isChecked) {
      this.setState({
        related: related.concat(e.target.id)
      })
    } else {
      this.setState({
        related: related.filter(item => item !== e.target.id)
      })
    }
  }

  chkEtc = (e)=>{
    this.setState({
      etc: e.target.value,
    })
  }
  
  submit = (e)=>{
    e.preventDefault();
    
    let isChecked = this.state.checked,
        d_isChecked = this.state.related,
        d_etc = this.state.etc,
        msg = this.state.reason;

    if (!isChecked){
      this.props.completeMsg('사유를 선택하세요.');
    } else if (isChecked === 'report_5' && d_isChecked.length ===0){
      this.props.completeMsg('이 콘텐츠와 관련없는 관심사를 선택하세요.');
    } else if (isChecked === 'report_6' && !d_etc){
      this.props.completeMsg('기타 사유를 입력하세요.');
    } else {
      this.props.close();
      this.props.completeMsg('['+ msg +'] 사유로 신고되었습니다.');
    }
    console.log(isChecked, d_isChecked, d_etc)

  }

  completeMsg = ()=>{
    let msg = this.props.msg;
    msg = '신고되었습니다.'
    this.props.completeMsg(msg);
    this.props.close();
  }
  
  render() {
    const {
      userReport,
    } = this.state;
    
    return (
      <form onSubmit={this.submit}>
      <div className="entry report">
        <div className="popupList radio">
      
          {userReport.map((report, i) => {
            return (
              <div className="item" key={i}>
                <input type="radio" 
                       name={report.name} 
                       id={report.for}
                       value={report.label}
                       onChange={this.chkReport}
                />
                <label htmlFor={report.for}>
                  {report.label}
                </label>

                {i === 4 && this.state.checked === 'report_5' && 
                  <div className="popupList popupInner checkbox" onChange={this.chkReportDetail}>
                    <p><strong>이 콘텐츠와 관련없는 관심사를 선택하세요.</strong></p>
                    {userReport[4].inner.map((cont, i) => {
                      return (<InnerReport label={cont.label}
                                          name={cont.name}
                                          for={cont.for}
                                          
                                          key={i} />);
                    })}
                  </div>
                }

                {i === 5 && this.state.checked === 'report_6' && 
                  <div className="popupList popupInner">
                    <p><strong>신고하는 이유가 무엇인가요? (최대 50자)</strong></p>
                    <textarea name="report_reason" id="report_reason" className="textarea" placeholder="이유를 입력해주세요" 
                              onChange={this.chkEtc}
                              value={this.state.etc || ''}
                    ></textarea>
                  </div>
                }

              </div>
            );
          })}

        </div>
      </div>

      <div className="btns">
        <button type="button" className="btn" onClick={this.props.close}>취소</button>
        <button type="submit" className="btn red">확인</button>
      </div>
      </form>
      
    );
  }
}
class InnerReport extends Component {
  render() {
    return (
      <div className="item">
        <input type="checkbox" 
               name={this.props.name} 
               id={this.props.for} />
        <label htmlFor={this.props.for}>{this.props.label}</label>
      </div>
    );
  }
}

export default UserReport;