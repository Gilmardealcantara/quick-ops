import React from 'react';
import './style.css'

const RequestExpenseItem = () => (
    <div className="expense-request-item">
        <div className="expense-request-item-icon">
            <div className="expense-request-item-icon-container">
                <i className="fas fa-money-check-alt"></i>
            </div>
            <span className="expense-request-item-icon-date">26/03/2020</span>
        </div>
        <div className="expense-request-item-type-value">
            <div className="expense-request-item-type" >
                <span className="expense-request-item-title">TIPO</span>
                <span className="expense-request-item-content">Hotel</span>
                <span className="expense-request-item-desc">12121</span>
            </div>
            <div className="expense-request-item-type" >
                <span className="expense-request-item-title">VALOR</span>
                <span className="expense-request-item-content">R$ 222,12</span>
                <span className="expense-request-item-desc">Valor da nota: RS 111112,22</span>
            </div>
        </div>
        <div className="expense-request-item-status" >
            <span className="expense-request-item-title">STATUS</span>
            <div className="expense-request-item-status-badge-ok"> <span>Aprovado</span></div>
            <div className="expense-request-item-status-badge-default"> <span>Dedutivel</span></div>
            <span className="expense-request-item-desc">Valor da nota: RS 111112,22</span>

        </div>
        <div className="expense-request-item-see-approval" >
            <i className="fas fa-receipt"></i>
            <span >Ver Nota Fiscal</span>
        </div>
    </div>
);

export default RequestExpenseItem;