import React from 'react';

import ReceiptAttachment from './ReceiptAttachment';
import NewExpenseForm from './NewExpenseForm';

import './style.css';


const AddNewExpense = () => {
    return (
        <>
            <div className="add-new-expense">
                <button className="add-new-expense-button">
                    <i className="fas fa-receipt"></i>
                    <span>Adicionar despesa</span>
                </button>
            </div>
            <div className="add-new-expense-form">
                <span className="expense-form-title">Nova Despesa</span>
                <div className="expense-form-content">
                    <ReceiptAttachment />
                    <NewExpenseForm />
                </div>
            </div>
        </>
    );
}

export default AddNewExpense;