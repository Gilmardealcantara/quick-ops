import { action } from 'typesafe-actions';
import { AppStatusTypes } from './types';

export const getAppStatus = () => action(AppStatusTypes.GET);
export const setAppStatus = (status: boolean) => action(AppStatusTypes.SET, status);

