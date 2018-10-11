import React, { Component } from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Login from './components/login/login';
import Confidential from './components/confidential/confidential';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/confidential' component={Confidential}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
