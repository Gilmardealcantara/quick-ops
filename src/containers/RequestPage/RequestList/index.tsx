import React from 'react';
import RequestAccountabilityItem from './RequestAccountabilityItem';
import RequestEvaluationItem from './RequestEvaluationItem';
// import RequestExpenseItem from './RequestExpenseItem';
import './style.css'


const RequestList =  () => (
    <div className="request-list">
        <RequestAccountabilityItem/>
        <RequestEvaluationItem/>
        {/* <RequestExpenseItem/> */}
    </div>
);

export default RequestList;
