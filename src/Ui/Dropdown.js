import React, { Component } from 'react';

class Dropdown extends Component {
  state = {
    dropdown: false,
  }

  static defaultProps = {
    name: '',
    ico: '',
    id: '',
    extra:'',
  }

  constructor(props) {
    super(props);
    this.state = {
        userDropdown: [
          {name:'이 유저 뮤트하기', id:0},
          {name:'신고하기', id:1},
          {name:'수정하기', id:2},
          {name:'삭제하기', id:3},
        ],
        utilDropdown: [
          {name:'다른 컬렉션 선택', ico:'fas fa-plus-square', extra:'more', id:0},
          {name:'기본 컬렉션에 저장하기', ico:'fas fa-paperclip', id:1,},
          {name:'카드에 작성하기', ico:'fas fa-pencil-alt', id:2},
          {name:'외부에 공유하기', ico:'fas fa-external-link-alt', id:3},
        ]
    };
  }
  
  render() {
    
    return (
      <div className="dropdown">

        {/* 카드-유저-더보기 */}
        {this.props.type === 'userInfo' && 
        <>
          {this.state.userDropdown.map((user, i) => {
              return (<DropdownItem name={user.name}
                                    key={user.id}/>);
          })}
        </>
        }

        {/* 카드-하단유틸-보내기 */}
        {this.props.type === 'utilShare' && 
        <>
          {this.state.utilDropdown.map((util, i) => {
              return (<DropdownItem name={util.name}
                                    ico={util.ico}
                                    extra={util.extra}
                                    key={util.id}/>);
          })}
        </>
        }
      </div>
      
    );
  }
}

class DropdownItem extends Component {
  render() {
    return (
      <div className={this.props.extra ? 'extraItem' : 'item'}>
        <button type="button" title={this.props.name} className={this.props.extra}>
          {this.props.ico &&
            <i className={this.props.ico}></i>
           }
          <span className={this.props.extra && 'blind'}>{this.props.name}</span>
        </button>
      </div>
    );
  }
}

export default Dropdown;