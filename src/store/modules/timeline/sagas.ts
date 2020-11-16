import { put, call } from 'redux-saga/effects';
import { API_URL } from '../../../utils/constants';
import { setTimelineData, setTimelineError } from './actions';

import FetchAPI, { FetchApiResponse } from '../../../services/FetchApi';


export function* loadTimelineDataFromApi() {
    try {
        const fetchApi = new FetchAPI(API_URL);
        const response: FetchApiResponse = yield call(fetchApi.get.bind(fetchApi), '/timeline');
        if (!response.error) {
            yield put(setTimelineData(response.data?.content));
        } else {
            yield put(setTimelineError(response.error.statusText));
        }
    } catch (error) {
        yield put(setTimelineError("-1"));
    }
}