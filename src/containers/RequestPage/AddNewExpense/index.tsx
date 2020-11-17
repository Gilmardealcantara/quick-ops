import { DatePicker, Input, InputNumber, Select } from 'antd';
import React from 'react';


import './style.css';


const currencyList = [
    {
        CtryNm: "BRAZIL",
        CcyNm: "Brazilian Real",
        PtBrName: "Real Brasileiro",
        Ccy: "BRL",
        CcyNbr: "986",
        CcyMnrUnts: "2"
    },
    {
        CtryNm: "BRITISH INDIAN OCEAN TERRITORY (THE)",
        PtBrName: "Dollar Americano",
        CcyNm: "US Dollar",
        Ccy: "USD",
        CcyNbr: "840",
        CcyMnrUnts: "2"
    },
    {
        CtryNm: "MEXICO",
        CcyNm: "Mexican Peso",
        PtBrName: "Peso Mexicano",
        Ccy: "MXN",
        CcyNbr: "484",
        CcyMnrUnts: "2"
    },
]

const currencyOptions = currencyList.map(c => ({
    label: c.PtBrName,
    value: `${c.CtryNm}::${c.Ccy}`
}));

const expenseTypesOptions = [
    {
        label: "Hotel",
        value: "hotel-fee"
    },
    {
        label: "Comida",
        value: "food"
    },
    {
        label: "Trasporte",
        value: "transport"
    }
]

const locale = "en-us";
const currencyFormatter = (selectedCurrOpt: string) => (value: string | number | undefined) => {

    if (value == undefined) {
        value = ""
    }

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: selectedCurrOpt.split("::")[1]
    }).format(value as number);
};

const currencyParser = (val: string | undefined) => {
    // for when the input gets clears
    if (!val || (typeof val === "string" && !val.length)) {
        val = "0.0";
    }

    // detecting and parsing between comma and dot
    const group = new Intl.NumberFormat(locale).format(1111).replace(/1/g, "");
    const decimal = new Intl.NumberFormat(locale).format(1.1).replace(/1/g, "");
    let reversedVal: number | string = val.replace(new RegExp("\\" + group, "g"), "");
    reversedVal = reversedVal.replace(new RegExp("\\" + decimal, "g"), ".");
    //  => 1232.21 €

    // removing everything except the digits and dot
    reversedVal = reversedVal.replace(/[^0-9.]/g, "");
    //  => 1232.21

    // appending digits properly
    const digitsAfterDecimalCount = (reversedVal.split(".")[1] || []).length;
    const needsDigitsAppended = digitsAfterDecimalCount > 2;

    if (needsDigitsAppended) {
        reversedVal = (Number(reversedVal) * Math.pow(10, digitsAfterDecimalCount - 2));
    }

    return Number.isNaN(reversedVal) ? 0 : reversedVal;
};

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
                                <Select placeholder="Tipo">
                                    {expenseTypesOptions.map(op => <Select.Option key={op.value} value={op.value}>{op.label}</Select.Option>)}
                                </Select>
                            </div>
                            <div className="receipt-form-field-select">
                                <span >Moeda *</span>
                                <Select placeholder="Moeda">
                                    {currencyOptions.map(op => <Select.Option key={op.value} value={op.value}>{op.label}</Select.Option>)}
                                </Select>
                            </div>
                        </div>
                        <div className="receipt-form-field-select">
                            <span >Descrição da despesa</span>
                            <Input style={{ width: '48%' }} placeholder="Basic usage" />
                        </div>
                        <div className="receipt-form-field-select">
                            <span >Data do comprovante</span>
                            <DatePicker
                                style={{ width: '48%' }}
                                format={"DD/MM/YYYY"}
                                onChange={(date, dateString) => { console.log(date, dateString); }}
                            />
                        </div>
                        <div className="receipt-form-field-selects">
                            <div className="receipt-form-field-select">
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
                            <div className="receipt-form-field-select">
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