import { Skeleton } from 'antd';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../../store';

import { loadHeaderData } from '../../../store/modules/headerData/actions';
import { HeaderDataState } from '../../../store/modules/headerData/types';

import AssignAnalyst from './AssignAnalyst';
import KeyValue from './KeyValue';

import './style.css';

const RequestHeader = () => {
    const dispatch = useDispatch()
    const { loading, data, error } = useSelector<ApplicationState, HeaderDataState>(state => state.headerData);

    useEffect(() => { dispatch(loadHeaderData()); }, [])

    return (
        <div className="request-reader-container">
            {loading || !data ? (
                <>
                    <Skeleton />
                    <Skeleton />
                </>
            ) : (
                    <>
                        <span className="request-reader-title">{data.title}</span>
                        <div style={{ display: "flex" }}>
                            <div className={"request-header-key-value-list"}>
                                <KeyValue name={"Nome"} value={"Back Office Team"} />
                                <KeyValue name={"Email"} value={"backoffice@hotmart.com"} />
                                <KeyValue name={"Justificativa"} value={"Reembolso referente a confraternização das equipes Backoffice / BI / Analytics."} />
                                <KeyValue name={"Finalidade"} value={"confraternização"} />
                                <KeyValue name={"Projeto"} value={"Afiliados do Brasil"} />
                                <KeyValue name={"Data"} value={"20/12/2020"} />
                                <KeyValue name={"quantidade"} value={"33 pessoas"} />
                                <KeyValue name={"Incluir Café da Manhã"} value={"não"} />
                            </div>
                            <span className="request-header-divider"></span>
                            <AssignAnalyst />
                        </div>
                    </>
                )}

        </div>
    );
}


export default RequestHeader;