import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/editor" component={Editor}/>
          <Route path="/searchList" component={SearchList}/>
          <Route path="/card" component={Card}/>
          <Route path="/commentView/:id" component={CommentView}/>
        </div>
      </Router>
    );
  }
}

export default App;
