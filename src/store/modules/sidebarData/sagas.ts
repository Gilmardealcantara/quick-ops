/* eslint-disable import/prefer-default-export */
import { put, call } from 'redux-saga/effects';
import { API_URL } from 'src/utils/constants';
import FetchAPI, { FetchApiResponse } from 'src/services/FetchApi';
import { setSideBarData, setSideBarDataError } from './actions';

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
    yield put(setSideBarDataError('-1'));
  }
}
