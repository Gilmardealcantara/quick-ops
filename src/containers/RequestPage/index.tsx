import React from 'react';
import RequestHeader from './RequestHeader';
import RequestSideBar from './RequestSideBar';
import Timeline from './Timeline';

import './style.css';

const RequestPage = () => (
    <div className="request-page">
        <div style={{width:'75%'}}>
            <RequestHeader/>
            <Timeline/>
        </div>
        <RequestSideBar/>
    </div>
);

export default RequestPage;
