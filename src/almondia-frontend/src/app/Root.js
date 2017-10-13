// @flow weak

import React, {
  Component
}                               from 'react';
// import PropTypes    from 'prop-types';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
}                               from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App                      from './containers/app/App';
import ScrollToTop              from './components/scrollToTop/ScrollToTop';
import PageNotFound             from './views/pageNotFound/PageNotFound'; // not connected to redux (no index.js)

const browserHistory = createBrowserHistory();

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <App />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Root;
