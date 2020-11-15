import { action } from 'typesafe-actions';
import { HeaderDataTypes, HeaderData } from './types';

export const loadHeaderData = () => action(HeaderDataTypes.LOAD);
export const setHeaderData = (data: HeaderData) => action(HeaderDataTypes.SET_DATA, data);
export const setHeaderDataError = (status: string) => action(HeaderDataTypes.SET_ERROR, status);

