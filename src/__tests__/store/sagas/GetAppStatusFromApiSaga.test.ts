import { put, call } from 'redux-saga/effects';
import { getAppStatusFromApi } from '../../../store/modules/appStatus/sagas';
import { setAppStatus } from '../../../store/modules/appStatus/actions';
import FetchApi from '../../../services/FetchApi';

describe('AppStatus', () => {
  test('getAppStatusFromApi', () => {
    const gen = getAppStatusFromApi();

    expect(gen.next().value).toEqual(call(FetchApi.get, '/status'));
    expect(gen.next().value).toEqual(put(setAppStatus(false)));
  });
});
