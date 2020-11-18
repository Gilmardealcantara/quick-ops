import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, RouterState } from 'connected-react-router';

import history from 'src/routes/history';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { AppStatusState } from './modules/appStatus/types';
import { HeaderDataState } from './modules/headerData/types';
import { TimelineState } from './modules/timeline/types';
import { SideBarDataState } from './modules/sidebarData/types';

export interface ApplicationState {
  router: RouterState;
  appStatus: AppStatusState;
  headerData: HeaderDataState;
  timeline: TimelineState;
  sidebarData: SideBarDataState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store: Store<ApplicationState> = createStore(rootReducer(history), applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
