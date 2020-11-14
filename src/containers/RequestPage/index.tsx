import React from 'react';
import RequestHeader from './RequestHeader';
import RequestList from './RequestList';

const RequestPage = () => (
    <div className="request-page">
        <RequestHeader/>
        <RequestList/>
    </div>
);

export default RequestPage;
