import { mock } from 'jest-mock-extended';
import sidebarData from '../../../store/modules/sidebarData';
import { loadSideBarData, setSideBarData, setSideBarDataError } from '../../../store/modules/sidebarData/actions';
import { SideBarData } from '../../../store/modules/sidebarData/types';

describe('sidebarData Reducer', () => {
  test('return initial state when action not exists and state is undefined', () => {
    const action = { type: 'dummy_action' };
    const result = sidebarData(undefined, action);
    expect(result).toEqual({ loading: false, data: [] });
  });

  test('return current state action not exits', () => {
    const action = { type: 'dummy_action' };
    const testState = { loading: false, data: [] };
    const result = sidebarData(testState, action);
    expect(result).toEqual(testState);
  });

  test('load data from api', () => {
    const expectedState = { loading: true, data: [] };
    const result = sidebarData(undefined, loadSideBarData());
    expect(result).toEqual(expectedState);
  });

  test('set state Success', () => {
    const sidebarDataMock = mock<SideBarData>();

    const result = sidebarData(undefined, setSideBarData([sidebarDataMock]));

    expect(result.data).toEqual([sidebarDataMock]);
    expect(result.error).toBeUndefined();
    expect(result.loading).toBeFalsy();
  });

  test('set state Error', () => {
    const result = sidebarData(undefined, setSideBarDataError('InternalServerError'));

    expect(result.error).toEqual({ status: 'InternalServerError' });
    expect(result.data).toEqual([]);
    expect(result.loading).toBeFalsy();
  });
});
