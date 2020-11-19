import { call } from 'redux-saga/effects';
import { loadHeaderDataFromApi } from '../../../store/modules/headerData/sagas';
import FetchApi from '../../../services/FetchApi';

describe('Header Data', () => {
  test('loadHeaderDataFromApi', () => {
    const gen = loadHeaderDataFromApi();

    expect(gen.next().value).toEqual(call(FetchApi.get, '/header'));
  });
});
