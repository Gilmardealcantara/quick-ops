import React from 'react'
import {Input} from 'antd';
import './style.css';

const KeyValue = ({ name, value }: { name: string, value: string }) => (
    <div className="request-header-key-value">
        <span className="request-header-key">{name}</span>
        <span className="request-header-value">{value}</span>
    </div>
)

const AssignAnalyst = () => (
    <div className="request-header-assign-analyst">
        <span className="request-header-assign-analyst-title">Atribuir Analisa</span>
        <Input placeholder="Atribuir analista"/>
        <span className="request-header-assign-analyst-key">Centro de Custo</span>
        <span className="request-header-assign-analyst-value">100% - Approval CC Test</span>
    </div>
)

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