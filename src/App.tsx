import React from 'react';
import { Provider } from 'react-redux';
// import Router from 'src/routes';

import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <div></div>
  </Provider>
);
export default App;
