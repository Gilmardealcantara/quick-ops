import React from 'react';
import './style.css'

const RequestEvaluationItem =  () => (
    <div className="evaluation-request-item">
        <div className="evaluation-request-item-icon">
            <div className="evaluation-request-item-icon-container">
                <i className="fas fa-users"></i>
            </div>
            <span className="evaluation-request-item-icon-date">26/03/2020</span>
        </div>
        <div className="evaluation-request-item-type" >
            <span className="evaluation-request-item-type-title">TIPO</span>
            <span className="evaluation-request-item-type-content">Aprovação doAdiantamento</span>
        </div>
        <div className="evaluation-request-item-status" >
            <span className="evaluation-request-item-type-title">STATUS</span>
            <div className="evaluation-request-item-status-badge">
                <span>Aprovado</span>
            </div>
        </div>
        <div className="evaluation-request-item-see-approval" >
            <span >Ver Aprovações</span>
            <i className="fas fa-chevron-down"></i>
        </div>
    </div>
);

export default RequestEvaluationItem;