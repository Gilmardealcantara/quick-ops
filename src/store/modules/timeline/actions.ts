import { action } from 'typesafe-actions';
import { TimelineTypes, TimelineItem } from './types';

export const loadTimeLineData = () => action(TimelineTypes.LOAD);
export const setTimelineData = (data: TimelineItem[]) => action(TimelineTypes.SET_DATA, data);
export const setTimelineError = (status: string) => action(TimelineTypes.SET_ERROR, status);

