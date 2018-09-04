import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import LandingPage from 'components/Pages/LandingPage/LandingPage';

import history from './history';

const Routing = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={LandingPage} />
    </Switch>
  </Router>
);

export default Routing;
