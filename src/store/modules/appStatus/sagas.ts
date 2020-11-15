import { put, call } from 'redux-saga/effects';
import { API_URL } from '../../../utils/constants';
import { setAppStatus } from './actions';

export function* getAppStatusFromApi() {
    try {
        const response: Response = yield call(fetch, `${API_URL}/status`);
        yield put(setAppStatus(response.ok));
    } catch {
        yield put(setAppStatus(false));
    }
}