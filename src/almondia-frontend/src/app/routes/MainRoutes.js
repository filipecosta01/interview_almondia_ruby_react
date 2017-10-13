// @flow weak

import React        from 'react';
import {
  Route,
  Switch
}                          from 'react-router';
import Home                from '../views/home/Home';
import About               from '../views/about/About';
import TryAutocomplete     from '../views/try/TryAutocomplete'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/try" component={TryAutocomplete} />
    </Switch>
  );
};

export default MainRoutes;
