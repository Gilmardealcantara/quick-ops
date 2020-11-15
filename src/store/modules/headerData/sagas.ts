import { put, call } from 'redux-saga/effects';
import { API_URL } from '../../../utils/constants';
import { setHeaderData, setHeaderDataError } from './actions';

export function* loadHeaderDataFromApi() {
    try {
        const response: Response = yield call(fetch, `${API_URL}/header`);
        if (response.ok) {
            const data = yield call(response.json);
            yield put(setHeaderData(data));
        } else {
            yield put(setHeaderDataError(response.statusText));
        }
    } catch (error) {
        yield put(setHeaderDataError("-1"));
    }
}