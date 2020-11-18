import { action } from 'typesafe-actions';
import { SideBarDataTypes, SideBarData } from './types';

export const loadSideBarData = () => action(SideBarDataTypes.LOAD);
export const setSideBarData = (data: SideBarData[]) => action(SideBarDataTypes.SET_DATA, data);
export const setSideBarDataError = (status: string) => action(SideBarDataTypes.SET_ERROR, status);
