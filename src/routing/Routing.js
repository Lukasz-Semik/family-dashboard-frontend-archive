import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Setter from 'components/Setter';

import history from './history';

const Routing = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Setter} />
    </Switch>
  </Router>
);

export default Routing;
