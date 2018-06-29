import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router';
import './App.css';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import Home from './components/Home';

const customHistory = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={customHistory}>
        <div className="App">
          <Header />
          <Switch>
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
