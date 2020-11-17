import React, { useState } from 'react';
import { DatePicker, Input, InputNumber, Select } from 'antd';

import { expenseTypesOptions, currencyOptions, currencyFormatter, currencyParser } from './FormHelper';

import './style.css';


interface Expense {
    expenseTypeCode?: string;
    currencyCode?: string
    currencyCodeKey?: string
    amountSpent?: number,
    amountTotal?: number,
    notes?: string,
    resourceUrl?: string;
    cardDate?: number
}

const NewExpenseForm = () => {
    const [expense, setExpense] = useState<Expense>({});

    const amountParser = (value: number | string | undefined) => Number((value as number).toFixed(2))

    console.log(expense)

    return (
        <div className="receipt-form-container">
            <div className="receipt-form-fields">
                <div className="receipt-form-field">
                    <span >Tipo *</span>
                    <Select
                        placeholder="Tipo"
                        onChange={(value: string) => setExpense({ ...expense, expenseTypeCode: value })}
                    >
                        {expenseTypesOptions.map(op => <Select.Option key={op.value} value={op.value}>{op.label}</Select.Option>)}
                    </Select>
                </div>
                <div className="receipt-form-field">
                    <span >Moeda *</span>
                    <Select
                        placeholder="Moeda"
                        onChange={(value: string) => {
                            setExpense({ ...expense, currencyCode: value.split("::")[1], currencyCodeKey: value })
                        }}
                    >
                        {currencyOptions.map(op => <Select.Option key={op.value} value={op.value}>{op.label}</Select.Option>)}
                    </Select>
                </div>
            </div>
            <div className="receipt-form-field">
                <span >Descrição da despesa</span>
                <Input
                    onChange={e => setExpense({ ...expense, notes: e.target.value })}
                    style={{ width: '48%' }}
                    placeholder="Descrição da despesa"
                />
            </div>
            <div className="receipt-form-field">
                <span >Data do comprovante</span>
                <DatePicker
                    placeholder="Selecione uma data"
                    style={{ width: '48%' }}
                    format={"DD/MM/YYYY"}
                    onChange={(date) => setExpense({ ...expense, cardDate: date?.valueOf() })}
                />
            </div>

            {expense.currencyCodeKey && (
                <div className="receipt-form-fields">
                    <div className="receipt-form-field">
                        <span >Valor total da nota/cupom</span>
                        <InputNumber
                            defaultValue={0}
                            style={{
                                width: '100%',
                                marginRight: "1rem"
                            }}
                            formatter={currencyFormatter(expense.currencyCodeKey)}
                            parser={currencyParser}
                            onChange={(value) => setExpense({ ...expense, amountTotal: amountParser(value) })}
                        />
                    </div>
                    <div className="receipt-form-field">
                        <span >Valor a ser considerado</span>
                        <InputNumber
                            defaultValue={0}
                            style={{
                                width: '100%',
                                marginRight: "1rem"
                            }}
                            formatter={currencyFormatter(currencyOptions[0].value)}
                            parser={currencyParser}
                            onChange={(value) => setExpense({ ...expense, amountTotal: amountParser(value) })}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewExpenseForm;