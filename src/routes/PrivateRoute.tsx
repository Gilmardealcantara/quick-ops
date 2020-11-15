import React from 'react';
import {
    Route,
    Redirect,
    RouteProps,
    RouteComponentProps,
} from 'react-router-dom';
import BasePage from '../containers/Base';

const PrivateRoute = ({ component, ...rest }: RouteProps) => {

    if (!component) 
        throw Error('component is undefined');

    // if (false)
        // return <Redirect to={{ pathname: '/error' }} />;

    const render = (props: RouteComponentProps): React.ReactNode =>
        <BasePage component={component} routeProps={props} />;

    return <Route {...rest} render={render} />;
};

export default PrivateRoute;
