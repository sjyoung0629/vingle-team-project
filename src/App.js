import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Editor from './Editor/Editor';
import SearchList from './Search/SearchList';
// import Card from './Card/Card';
import PostView from './Posts/PostView';
import List from './List/List';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="rootContainer">
          <Route path="/editor" component={Editor}/>
          <Route path="/searchList" component={SearchList}/>
          <Route exact path="/" component={List}/>
          <Route path="/posts/:id" component={PostView}/>
        </div>
      </Router>
    );
  }
}

export default App;
