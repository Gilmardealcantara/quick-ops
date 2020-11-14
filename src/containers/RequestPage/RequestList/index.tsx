import React from 'react';
import './style.css'

// const RequestEvaluationItem =  () => (
//     <div className="request-item">
//         <div className="request-item-1" style={{backgroundColor:"red"}}></div>
//         <div className="request-item-2" style={{backgroundColor:"blue"}}></div>
//         <div className="request-item-3" style={{backgroundColor:"green"}}></div>
//         <div className="request-item-4" style={{backgroundColor:"grey"}}></div>
//     </div>
// );

const RequestAccountabilityItem =  () => (
    <div className="request-item">
        <div className="request-item-icon">
            <div className="request-item-icon-container">
                <i className="fas fa-asterisk request-item-icon-asterisk"></i>
            </div>
            <span className="request-item-icon-date">26/03/2020</span>
        </div>
        <div className="request-item-type" >
            <span className="request-item-type-title">TIPO</span>
            <span className="request-item-type-content">Despesas enviadas para aprovação por Thiago Marques</span>
        </div>
    </div>
);

// const RequestExpenseItem =  () => (
//     <div className="request-item">
//         <div className="request-item-1" style={{backgroundColor:"red"}}></div>
//         <div className="request-item-2" style={{backgroundColor:"blue"}}></div>
//         <div className="request-item-3" style={{backgroundColor:"green"}}></div>
//         <div className="request-item-4" style={{backgroundColor:"grey"}}></div>
//     </div>
// );

const RequestList =  () => (
    <div className="request-list">
        <RequestAccountabilityItem/>
    </div>
);

export default RequestList;
