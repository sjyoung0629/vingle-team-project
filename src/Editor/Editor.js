import React, { Component } from 'react'
import EditorUser from './EditorUser';
import EditorWrite from './EditorWrite';
import './Editor.css';


export default class Editor extends Component {
  render() {
    const history = this.props.history;

    return (
      <div className="editorContainer">
        <EditorUser />    
        <EditorWrite history={history}/>        
      </div>
    )
  }
}
