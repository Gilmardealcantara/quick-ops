import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import appStatus from './appStatus';
import headerData from './headerData';
import timeline from './timeline';

export default (history: History<any>) =>
    combineReducers({
        router: connectRouter(history),
        appStatus,
        headerData,
        timeline
    });
