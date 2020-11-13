import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';


export default function Routes() {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={() => <div>test</div>} />
            </Switch>
        </ConnectedRouter>
    );
}
