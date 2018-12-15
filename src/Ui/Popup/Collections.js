import React, { Component } from 'react';

class Collections extends Component {
  state = {
    checked: '',
    collections: [
      {label: '기본 컬렉션', name:'cname', for:'collection_1'},
      {label: '해축', name:'cname', for:'collection_2'},
    ],
    chk_collections: [],
  }
  static defaultProps = {
    label:'',
    name: '',
    for: '',
  }

  addCollection = (c_data)=>{
    const { collections } = this.state;
    this.setState({
      collections: collections.concat({ ...c_data })
    })
  }

  chkCollection = (e)=>{
    let isChecked = e.target.checked,
        val = e.target.value,
        chk = document.querySelector('input[value="'+ val +'"]');
    const { chk_collections } = this.state;
    if (isChecked) {
      this.setState({
        chk_collections: chk_collections.concat(val)
      })
      chk.checked = true;
    } else {
      this.setState({
        chk_collections: chk_collections.filter(item => item !== val)
      })
      chk.checked = false;
    }
  }

  submit = (e)=>{
    e.preventDefault();
    const { chk_collections } = this.state;
    if (e.keyCode !== 13) {
      let msg = '';
      if (chk_collections.length !== 0){
        msg = '선택한 컬렉션에 저장되었습니다.';
        this.props.close();
      } else {
        msg = '컬렉션을 선택하세요.';
      }
      this.props.completeMsg(msg);
      console.log(chk_collections);
    }
  }

  completeMsg = ()=>{
    let msg = this.props.msg;
    msg = '컬렉션에 저장되었습니다.';
    this.props.completeMsg(msg);
    this.props.close();
  }
  
  render() {
    const {
      collections
    } = this.state;
    
    return (
      <form onSubmit={this.submit}>
      <div className="entry collections">
        <div className="popupList checkbox">
          {collections.map((collection, i) => {
            return (
              i < 3 &&
              <CollectionList label={collection.label}
                              name={collection.name}
                              for={collection.for}
                              id={collection.for+'_c'}
                              firstletter={collection.label.substring(0, 1)}
                              value={collection.for.substring(-2)}
                              chk={this.chkCollection}
                              key={i} />
            );
          })}
        </div>

        <div className="create">
          <Create onCreate={this.addCollection}
                  l_collection={collections.length}
            />
        </div>

        <div className="popupList checkbox">
          {collections.map((collection, i) => {
            return (
              <CollectionList label={collection.label}
                              name={collection.name}
                              for={collection.for}
                              id={collection.for}
                              firstletter={collection.label.substring(0, 1)}
                              value={collection.for}
                              chk={this.chkCollection}
                              key={i} />
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

class CollectionList extends Component {
  state = {
    checked: false,
  }
  render() {
    return (
      <div className="item">
        <input type="checkbox" 
              name={this.props.name} 
              id={this.props.id}
              for={this.props.for}
              value={this.props.value}
              onChange={this.props.chk}
         />
        <label htmlFor={this.props.for}><i>{this.props.firstletter}</i><span>{this.props.label}</span></label>
      </div>
    );
  }
}

class Create extends Component {
  state = {
    creatable: false,
  }
  createCollection = (e)=>{
    if (e.target.value){
      this.setState({
        creatable: true, 
        label: e.target.value,
        name: 'cname',
        for: 'collection_'+(this.props.l_collection+1)
      });
      
    } else {
      this.setState({creatable: false})
    }
  }
  creatable = (e)=>{
    if (e.keyCode === 13){
      e.preventDefault();
    }
    if (this.state.creatable && e.keyCode === 13) {
      this.create();
    }
  }
  create = (e)=>{
    if (this.state.creatable){
      this.props.onCreate(this.state);
      this.setState({
        creatable: false,
        label: '',
        name: 'cname',
        for: '',
      });
    }
  }

  render() {
    return (
      <div className="item">
        <label htmlFor="create_c"><i className="fas fa-plus"></i></label>
        <input type="text" 
              name={this.state.name} 
              id="create_c" 
              onChange={this.createCollection}
              onKeyDown={this.creatable}
              value={this.state.label || ''}
              placeholder="새 컬렉션 만들기"
        />
        {this.state.creatable &&
          <button type="button" onClick={this.create}>만들기</button>
        }
      </div>
    );
  }
}

export default Collections;