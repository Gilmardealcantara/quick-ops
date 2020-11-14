import React from 'react'
import './style.css';

import AssignAnalyst from './AssignAnalyst';
import KeyValue from './KeyValue';

const RequestHeader = () => (
    <div className="request-reader-container">
        <span className="request-reader-title">Reenbolso confraternizalççao</span>
        <div style={{display: "flex"}}>
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
            <AssignAnalyst/>
        </div>
    </div>
)

export default RequestHeader;