/* eslint-disable import/prefer-default-export */
import { put, call } from 'redux-saga/effects';
import FetchAPI, { FetchApiResponse } from 'src/services/FetchApi';
import { setSideBarData, setSideBarDataError } from './actions';

export function* loadSidebarDataFromApi() {
  try {
    const response: FetchApiResponse = yield call(FetchAPI.get, '/sidebar');
    if (!response.error) {
      yield put(setSideBarData(response.data.content));
    } else {
      yield put(setSideBarDataError(response.error.statusText));
    }
  } catch (error) {
    yield put(setSideBarDataError('-1'));
  }
}
