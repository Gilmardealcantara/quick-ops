import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getAppStatus} from '../../store/modules/appStatus/actions'
import RequestHeader from './RequestHeader';
import RequestSideBar from './RequestSideBar';
import Timeline from './Timeline';

import './style.css';
import { ApplicationState } from '../../store';
import { AppStatusState } from '../../store/modules/appStatus/types';

const RequestPage = () => {
    const dipatch = useDispatch();
    const { loading, ok } = useSelector<ApplicationState, AppStatusState>((state) => ({ ...state.appStatus, ok:true}));

    useEffect(() => { dipatch(getAppStatus()); }, []);
    
    if(loading)
        return <div>loading</div>

    if(!ok){
        return <div>error</div>
    }

    return (
        <div className="request-page">
            <div style={{width:'75%'}}>
                <RequestHeader/>
                <Timeline/>
            </div>
            <RequestSideBar/>
        </div>
    )
};

export default RequestPage;
