import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';
import PrivateRoute from '../routes/PrivateRoute';
import RequestPage from '../containers/RequestPage';
import Home from '../containers/Home';


export default function Routes() {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/login" component={() => <div>Login</div>} />
                <PrivateRoute path="/requests" component={RequestPage} />
                <PrivateRoute path="/" component={Home} />
            </Switch>
        </ConnectedRouter>
    );
}
