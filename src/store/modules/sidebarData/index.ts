import { Reducer } from 'redux';
import { SideBarDataState, SideBarDataTypes } from './types';

export const INITIAL_STATE: SideBarDataState = {
  loading: false,
  data: [],
};

const reducer: Reducer<SideBarDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SideBarDataTypes.LOAD:
      return { ...state, loading: true, error: undefined };
    case SideBarDataTypes.SET_DATA:
      return {
        ...state,
        loading: false,
        error: undefined,
        data: action.payload,
      };
    case SideBarDataTypes.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: { status: action.payload },
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
