import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import { ApplicationState } from '../../store';
import { AppStatusState } from '../../store/modules/appStatus/types';

import {getAppStatus} from '../../store/modules/appStatus/actions'
import RequestHeader from './RequestHeader';
import RequestSideBar from './RequestSideBar';
import Timeline from './Timeline';
import Error from '../../components/Error';

import './style.css';



const RequestPage = () => {
    const dipatch = useDispatch();
    const { loading, ok } = useSelector<ApplicationState, AppStatusState>((state) => ({ ...state.appStatus, ok:true}));

    useEffect(() => { dipatch(getAppStatus()); }, []);

    if(!ok) return <Error />

    return (
        <Spin spinning={loading} size="large">
            <div className="request-page">
                <div style={{width:'75%'}}>
                    <RequestHeader/>
                    <Timeline/>
                </div>
                <RequestSideBar/>
            </div>
        </Spin>
    )
};

export default RequestPage;
