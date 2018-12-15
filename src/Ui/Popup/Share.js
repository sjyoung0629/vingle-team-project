import React, { Component } from 'react';

class Share extends Component {
  state = {
    shares: [
      {label: '페이스북에 공유하기', name:'facebook'},
      {label: '트위터에 공유하기', name:'twitter'},
      {label: '밴드에 공유하기', name:'band'},
      {label: '클립보드에 복사', name:'clipboard'},
    ]
  }
  static defaultProps = {
    label:'',
    name: '',
  }

  share = (e)=>{
    let btn = e.target.className;
    if (btn === 'facebook'){
      alert('facebook');
    }
    if (btn === 'twitter'){
      alert('twitter');
    }
    if (btn === 'band'){
      alert('band us');
    }
    if (btn === 'clipboard'){
      alert('clipboard');
    }
  }
  
  render() {
    const {
      shares,
    } = this.state;
    
    return (
      <div className="entry share">
        <div className="shareList">
          {shares.map((share, i) => {
            return (
            <ShareItem label={share.label}
                      name={share.name}
                      click={this.share}
                      key={i}
             />
             );
          })}
        </div>
      </div>
    );
  }
}
class ShareItem extends Component {
  render() {
    return (
      <div className="item">
        <button type="button" className={this.props.name} title={this.props.label} onClick={this.props.click}>
          <span className="blind">{this.props.label}</span>
        </button>
      </div>
    );
  }
}

export default Share;