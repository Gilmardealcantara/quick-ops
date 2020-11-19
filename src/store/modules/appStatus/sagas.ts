/* eslint-disable import/prefer-default-export */
import { put, call } from 'redux-saga/effects';
import FetchAPI, { FetchApiResponse } from 'src/services/FetchApi';
import { setAppStatus } from './actions';

export function* getAppStatusFromApi() {
  try {
    const response: FetchApiResponse = yield call(FetchAPI.get, '/status');
    yield put(setAppStatus(response.success));
  } catch {
    yield put(setAppStatus(false));
  }
}
