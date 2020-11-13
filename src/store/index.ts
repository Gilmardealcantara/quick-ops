import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, RouterState } from 'connected-react-router';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import history from '../routes/history';


export interface ApplicationState {
    router: RouterState;
    // general: GeneralState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store: Store<ApplicationState> = createStore(
    rootReducer(history),
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;