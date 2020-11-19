import { mock, MockProxy } from 'jest-mock-extended';
import headerData from '../../../store/modules/headerData';
import { loadHeaderData, setHeaderData, setHeaderDataError } from '../../../store/modules/headerData/actions';
import { HeaderData } from '../../../store/modules/headerData/types';

describe('headerData Reducer', () => {
  test('return initial state when action not exists and state is undefined', () => {
    const action = { type: 'dummy_action' };
    const result = headerData(undefined, action);
    expect(result).toEqual({ loading: false });
  });

  test('return current state action not exits', () => {
    const action = { type: 'dummy_action' };
    const testState = { loading: false, ok: false };
    const result = headerData(testState, action);
    expect(result).toEqual(testState);
  });

  test('load data from api', () => {
    const expectedState = { loading: true };
    const result = headerData(undefined, loadHeaderData());
    expect(result).toEqual(expectedState);
  });

  test('set state Success', () => {
    const headerDataMock = mock<HeaderData>();
    headerDataMock.id = 77;

    const result = headerData(undefined, setHeaderData(headerDataMock));

    expect(result.data).toEqual(headerDataMock);
    expect(result.error).toBeUndefined();
    expect(result.loading).toBeFalsy();
  });

  test('set state Error', () => {
    const result = headerData(undefined, setHeaderDataError('InternalServerError'));

    expect(result.error).toEqual({ status: 'InternalServerError' });
    expect(result.data).toBeUndefined();
    expect(result.loading).toBeFalsy();
  });
});
