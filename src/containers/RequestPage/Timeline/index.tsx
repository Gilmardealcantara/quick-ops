import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../store';

import { loadTimeLineData } from '../../../store/modules/timeline/actions';
import { TimelineState } from '../../../store/modules/timeline/types';

import RequestAccountabilityItem from './RequestAccountabilityItem';
import RequestEvaluationItem from './RequestEvaluationItem';
import RequestExpenseItem from './RequestExpenseItem';

import './style.css'

const Timeline = () => {
    const dispatch = useDispatch();
    const { data } = useSelector<ApplicationState, TimelineState>(state => state.timeline);

    useEffect(() => {
        dispatch(loadTimeLineData());
    }, [])

    return (
        <div className="request-list">
            {data.map(timelineItem => {
                if (timelineItem.cardType == "ACCOUNTABILITY_CREATED" || timelineItem.cardType == "ACCOUNTABILITY_SUBMITTED")
                    return <RequestAccountabilityItem key={timelineItem.id} item={timelineItem} />
                if (timelineItem.cardType == "EVALUATION")
                    return <RequestEvaluationItem key={timelineItem.id} item={timelineItem} />
                if (timelineItem.cardType == "EXPENSE")
                    return <RequestExpenseItem key={timelineItem.id} item={timelineItem} />
            })}
        </div>
    );
}

export default Timeline;
