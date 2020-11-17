import React, { useState } from 'react';
import Animate from 'rc-animate'

import ReceiptAttachment from './ReceiptAttachment';
import NewExpenseForm from './NewExpenseForm';

import './style.css';


const AddNewExpense = () => {
    const [showForm, setShowForm] = useState(false)

    return (
        <>
            <div className="add-new-expense">
                <button className="add-new-expense-button" onClick={() => setShowForm(true)}>
                    <i className="fas fa-receipt"></i>
                    <span>Adicionar despesa</span>
                </button>
            </div>
            <Animate transitionName="fade">
                {showForm ? (
                    <div className="add-new-expense-form">
                        <span className="expense-form-title">Nova Despesa</span>
                        <div className="expense-form-content">
                            <ReceiptAttachment />
                            <NewExpenseForm closeForm={() => setShowForm(false)} />
                        </div>
                    </div>
                ) : null}
            </Animate>

        </>
    );
}

export default AddNewExpense;