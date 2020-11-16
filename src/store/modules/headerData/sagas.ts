import { put, call } from 'redux-saga/effects';
import { API_URL } from '../../../utils/constants';
import { setHeaderData, setHeaderDataError } from './actions';

import FetchAPI, { FetchApiResponse } from '../../../services/FetchApi';


export function* loadHeaderDataFromApi() {
    try {
        const fetchApi = new FetchAPI(API_URL);
        const response: FetchApiResponse = yield call(fetchApi.get.bind(fetchApi), '/header');
        if (!response.error) {
            yield put(setHeaderData(response.data));
        } else {
            yield put(setHeaderDataError(response.error.statusText));
        }
    } catch (error) {
        yield put(setHeaderDataError("-1"));
    }
}