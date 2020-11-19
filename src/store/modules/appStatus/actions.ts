import { action } from 'typesafe-actions';
import { AppAction, AppStatusTypes } from './types';

export const getAppStatus = () => action(AppStatusTypes.GET);
export const setAppStatus = (status: boolean) => action(AppStatusTypes.SET, status);
export const setEditStatus = () => action(AppStatusTypes.SET_ACTION, AppAction.EDIT);
export const setReadStatus = () => action(AppStatusTypes.SET_ACTION, AppAction.READ);
