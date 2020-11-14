import React from 'react';
import './style.css'

const RequestAccountabilityItem =  () => (
    <div className="accountability-request-item">
        <div className="accountability-request-item-icon">
            <div className="accountability-request-item-icon-container">
                <i className="fas fa-asterisk"></i>
            </div>
            <span className="accountability-request-item-icon-date">26/03/2020</span>
        </div>
        <div className="accountability-request-item-type" >
            <span className="accountability-request-item-type-title">TIPO</span>
            <span className="accountability-request-item-type-content">Despesas enviadas para aprovação por Thiago Marques</span>
        </div>
    </div>
);

export default RequestAccountabilityItem;