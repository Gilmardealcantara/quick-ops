/* eslint-disable import/prefer-default-export */
import { put, call } from 'redux-saga/effects';
import FetchAPI, { FetchApiResponse } from 'src/services/FetchApi';
import { setHeaderData, setHeaderDataError } from './actions';

export function* loadHeaderDataFromApi() {
  try {
    const response: FetchApiResponse = yield call(FetchAPI.get, '/header');
    if (!response.error) {
      yield put(setHeaderData(response.data));
    } else {
      yield put(setHeaderDataError(response.error.statusText));
    }
  } catch (error) {
    yield put(setHeaderDataError('-1'));
  }
}
