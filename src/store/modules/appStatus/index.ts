import { Reducer } from 'redux';
import { AppAction, AppStatusState, AppStatusTypes } from './types';

export const INITIAL_STATE: AppStatusState = {
  loading: false,
  status: AppAction.READ,
};

const reducer: Reducer<AppStatusState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppStatusTypes.GET:
      return { ...state, loading: true };
    case AppStatusTypes.SET:
      return { ...state, loading: false, ok: action.payload };
    case AppStatusTypes.SET_ACTION:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export default reducer;
