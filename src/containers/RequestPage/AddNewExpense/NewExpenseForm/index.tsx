import { DatePicker, Input, InputNumber, Select } from 'antd';
import React from 'react';

import { expenseTypesOptions, currencyOptions, currencyFormatter, currencyParser } from './FormHelper';

import './style.css';


const NewExpenseForm = () => {
    return (
        <div className="receipt-form-container">
            <div className="receipt-form-fields">
                <div className="receipt-form-field">
                    <span >Tipo *</span>
                    <Select placeholder="Tipo">
                        {expenseTypesOptions.map(op => <Select.Option key={op.value} value={op.value}>{op.label}</Select.Option>)}
                    </Select>
                </div>
                <div className="receipt-form-field">
                    <span >Moeda *</span>
                    <Select placeholder="Moeda">
                        {currencyOptions.map(op => <Select.Option key={op.value} value={op.value}>{op.label}</Select.Option>)}
                    </Select>
                </div>
            </div>
            <div className="receipt-form-field">
                <span >Descrição da despesa</span>
                <Input style={{ width: '48%' }} placeholder="Basic usage" />
            </div>
            <div className="receipt-form-field">
                <span >Data do comprovante</span>
                <DatePicker
                    style={{ width: '48%' }}
                    format={"DD/MM/YYYY"}
                    onChange={(date, dateString) => { console.log(date, dateString); }}
                />
            </div>
            <div className="receipt-form-fields">
                <div className="receipt-form-field">
                    <span >Valor total da nota/cupom</span>
                    <InputNumber
                        defaultValue={10000000}
                        style={{
                            width: '100%',
                            marginRight: "1rem"
                        }}
                        formatter={currencyFormatter(currencyOptions[0].value)}
                        parser={currencyParser}
                    />
                </div>
                <div className="receipt-form-field">
                    <span >Valor a ser considerado</span>
                    <InputNumber
                        defaultValue={10000000}
                        style={{
                            width: '100%',
                            marginRight: "1rem"
                        }}
                        formatter={currencyFormatter(currencyOptions[0].value)}
                        parser={currencyParser}
                    />
                </div>
            </div>
        </div>
    );
}

export default NewExpenseForm;