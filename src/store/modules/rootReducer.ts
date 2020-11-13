import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// import general from './general';

export default (history: History<any>) =>
    combineReducers({
        router: connectRouter(history),
        // general,
    });
