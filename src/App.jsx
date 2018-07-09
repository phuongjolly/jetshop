import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router';
import { Provider } from 'react-redux';
import './App.css';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import Home from './components/Home';
import store from './store/store';
import Review from './components/Review';
import Collections from './components/Collections';
import Collection from './components/Collection';

const customHistory = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={customHistory}>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route path="/reviews/:name" component={Review} />
                <Route path="/collections/:id" component={Collection} />
                <Route path="/collections" component={Collections} />
                <Route component={Home} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
