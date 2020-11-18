import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from 'src/routes/history';
import PrivateRoute from 'src/routes/PrivateRoute';
import RequestPage from 'src/containers/RequestPage';
import Home from 'src/containers/Home';

const Routes: React.FC = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path='/login' component={() => <div>Login</div>} />
      <PrivateRoute path='/requests' component={RequestPage} />
      <PrivateRoute path='/' component={Home} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
