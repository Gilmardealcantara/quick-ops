import appStatus from '../../../store/modules/appStatus';
import { getAppStatus, setAppStatus, setReadStatus, setEditStatus } from '../../../store/modules/appStatus/actions';
import { AppAction } from '../../../store/modules/appStatus/types';

describe('appStatus Reducer', () => {
  test('return initial state when action not exists and state is undefined', () => {
    const action = { type: 'dummy_action' };
    const result = appStatus(undefined, action);
    expect(result).toEqual({ loading: false, status: AppAction.READ });
  });

  test('return current state action not exits', () => {
    const action = { type: 'dummy_action' };
    const testState = { loading: false, ok: false, status: AppAction.READ };
    const result = appStatus(testState, action);
    expect(result).toEqual(testState);
  });

  [true, false].forEach((status) => {
    test(`set state to ${status}`, () => {
      const expectedState = { loading: false, ok: status, status: AppAction.READ };
      const result = appStatus(undefined, setAppStatus(status));
      expect(result).toEqual(expectedState);
    });
  });

  test('set Read Action State', () => {
    const expectedState = { loading: false, status: AppAction.READ };
    const result = appStatus(undefined, setReadStatus());
    expect(result).toEqual(expectedState);
  });

  test('set Read Edit State', () => {
    const expectedState = { loading: false, status: AppAction.EDIT };
    const result = appStatus(undefined, setEditStatus());
    expect(result).toEqual(expectedState);
  });

  test('get state from api', () => {
    const expectedState = { loading: true, status: AppAction.READ };
    const result = appStatus(undefined, getAppStatus());
    expect(result).toEqual(expectedState);
  });
});
