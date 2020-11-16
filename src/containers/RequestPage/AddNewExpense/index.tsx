import { Input, Select } from 'antd';
import React from 'react';


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
                    <div className="receipt-attach">
                        <div>
                            <span className="receipt-title">Envie o comprovante</span>
                            <span className="receipt-desc">Você pode inserir arquivos nos formatos PNG, JPG ou PDF. Tamanho máx: 10MB</span>

                            <button className="receipt-button" onClick={() => document.getElementById('file')?.click()}>
                                <i className="fas fa-filter"></i>
                                <span>Escolher arquivo</span>
                            </button>
                            <input type="file" style={{ display: "none" }} id="file" name="file" />
                        </div>
                    </div>
                    <div className="receipt-form-field">
                        <div className="receipt-form-field-selects">
                            <div className="receipt-form-field-select">
                                <span >Tipo *</span>
                                <Select placeholder="Select a person">
                                    <Select.Option value="jack">Jack</Select.Option>
                                    <Select.Option value="lucy">Lucy</Select.Option>
                                    <Select.Option value="tom">Tom</Select.Option>
                                </Select>
                            </div>
                            <div className="receipt-form-field-select">
                                <span >Moeda *</span>
                                <Select placeholder="Select a person">
                                    <Select.Option value="jack">Jack</Select.Option>
                                    <Select.Option value="lucy">Lucy</Select.Option>
                                    <Select.Option value="tom">Tom</Select.Option>
                                </Select>
                            </div>
                        </div>
                        <div className="receipt-form-field-select">
                            <span >Descrição da despesa</span>
                            <Input style={{ width: '48%' }} placeholder="Basic usage" />
                        </div>
                        <div className="receipt-form-field-select">
                            <span >Data do comprovante</span>
                            <Input style={{ width: '48%' }} placeholder="Basic usage" />
                        </div>
                    </div>
                </div>
                <div className="action-buttons">
                    <span>Cancelar</span>
                    <span>Salvar</span>
                </div>
            </div>
        </>
    );
}

export default AddNewExpense;