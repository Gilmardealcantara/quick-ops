import { Reducer } from 'redux';
import { HeaderDataState, HeaderDataTypes } from './types';

export const INITIAL_STATE: HeaderDataState = {
  loading: false,
};

const reducer: Reducer<HeaderDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderDataTypes.LOAD:
      return { ...state, loading: true, error: undefined };
    case HeaderDataTypes.SET_DATA:
      return {
        ...state,
        loading: false,
        error: undefined,
        data: action.payload,
      };
    case HeaderDataTypes.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: { status: action.payload },
        data: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
