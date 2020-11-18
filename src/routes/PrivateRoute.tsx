import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { TOKEN_STORAGE_KEY } from 'src/utils/constants';
import BasePage from 'src/containers/Base';

export const isAuthenticated = (): boolean => localStorage.getItem(TOKEN_STORAGE_KEY) === null;

const PrivateRoute = ({ component, ...rest }: RouteProps) => {
  if (!component) {
    throw Error('component is undefined');
  }

  if (isAuthenticated()) {
    const render = (props: RouteComponentProps): React.ReactNode => (
      <BasePage component={component} routeProps={props} />
    );

    return <Route {...rest} render={render} />;
  }
  return <Redirect to={{ pathname: '/login' }} />;
};

export default PrivateRoute;
