import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';
import PrivateRoute from '../routes/PrivateRoute';
import RequestPage from '../containers/RequestPage';


export default function Routes() {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <PrivateRoute path="/error" component={() => <div>error</div>} />
                <PrivateRoute path="/loading" component={() => <div>loading</div>} />
                <PrivateRoute path="/requests" component={RequestPage} />
                <PrivateRoute path="/" component={() => <div>Home</div>} />
            </Switch>
        </ConnectedRouter>
    );
}
