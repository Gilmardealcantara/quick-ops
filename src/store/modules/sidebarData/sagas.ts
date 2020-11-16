import { put, call } from 'redux-saga/effects';
import { API_URL } from '../../../utils/constants';
import { setSideBarData, setSideBarDataError } from './actions';

import FetchAPI, { FetchApiResponse } from '../../../services/FetchApi';


export function* loadSidebarDataFromApi() {
    try {
        const fetchApi = new FetchAPI(API_URL);
        const response: FetchApiResponse = yield call(fetchApi.get.bind(fetchApi), '/sidebar');
        if (!response.error) {
            yield put(setSideBarData(response.data.content));
        } else {
            yield put(setSideBarDataError(response.error.statusText));
        }
    } catch (error) {
        yield put(setSideBarDataError("-1"));
    }
}