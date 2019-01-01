import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Editor from './Editor/Editor';
import SearchList from './Search/SearchList';
import PostView from './Posts/PostView';
import List from './List/List';
import Login from './Login/Login';
import Join from './Join/Join';

class App extends Component {
  constructor() {
    super();

    this.state = {
      logged: false,
    }
  }

  isAuth = () => {
    this.setState({logged: !this.state.logged});
    localStorage.setItem('logged', !this.state.logged);
  }

  render() {
    return (
      <Router>
        <div className="rootContainer">
          <Route path="/editor" rrender={(props) => <Editor {...props} auth={this.isAuth}/>} />
          <Route path="/searchList" component={SearchList}/>
          <Route path="/list" render={(props) => <List {...props} auth={this.isAuth}/>}/>
          <Route exact path="/" render={(props) => <Join {...props} auth={this.isAuth}/>}/>
          <Route path="/login" render={(props) => <Login {...props} auth={this.isAuth} />}/>
          <Route path="/posts/:id" render={(props) => <PostView {...props} auth={this.isAuth}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
