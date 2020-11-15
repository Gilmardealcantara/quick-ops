import { all, takeLatest } from 'redux-saga/effects';

import {AppStatusTypes} from './appStatus/types';
import { getAppStatusFromApi } from './appStatus/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(AppStatusTypes.GET, getAppStatusFromApi),
    ]);
}
