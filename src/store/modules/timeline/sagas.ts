/* eslint-disable import/prefer-default-export */
import { put, call } from 'redux-saga/effects';
import FetchAPI, { FetchApiResponse } from 'src/services/FetchApi';
import { setTimelineData, setTimelineError } from './actions';

export function* loadTimelineDataFromApi() {
  try {
    const response: FetchApiResponse = yield call(FetchAPI.get, '/timeline');
    if (!response.error) {
      yield put(setTimelineData(response.data?.content));
    } else {
      yield put(setTimelineError(response.error.statusText));
    }
  } catch (error) {
    yield put(setTimelineError('-1'));
  }
}
