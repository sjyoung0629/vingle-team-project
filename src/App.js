import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Editor from './Editor/Editor';
import SearchList from './Search/SearchList';
import Card from './Card/Card';
import CommentView from './Comment/CommentView';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/editor" component={Editor}/>
          <Route path="/searchList" component={SearchList}/>
          <Route exact path="/" component={Card}/>
          <Route path="/commentView" component={CommentView}/>
        </div>
      </Router>
    );
  }
}

export default App;
