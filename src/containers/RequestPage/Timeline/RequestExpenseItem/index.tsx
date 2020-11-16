import { format } from 'date-fns';
import React from 'react';
import { TimelineItem } from '../../../../store/modules/timeline/types';
import './style.css'

interface Props {
    item: TimelineItem;
}

const RequestExpenseItem = ({ item }: Props) => {
    const showCurrency = (value: number) => {
        let formatValue = "0,00"
        if (value != 0)
            formatValue = value.toFixed(2).replace('.', ',');
        return `${item.currencySymbol} ${formatValue}`;
    }

    const getIconClass = (code: string) => code ? `fas fa-${code}` : "fas fa-money-check-alt";
    const getCurrencyAmountSpent = () => showCurrency(item.amountSpent);
    const getCurrencyAmountTotal = () => `Valor da nota: ${showCurrency(item.amountTotal)}`;

    return (
        <div className="expense-request-item">
            <div className="expense-request-item-icon">
                <div className="expense-request-item-icon-container">
                    <i className={getIconClass(item.expenseTypeIcon)}></i>
                </div>
                <span className="expense-request-item-icon-date">{format(new Date(item.cardDate), "dd/MM/yyyy")}</span>
            </div>
            <div className="expense-request-item-type-value">
                <div className="expense-request-item-type" >
                    <span className="expense-request-item-title">TIPO</span>
                    <span className="expense-request-item-content">{item.notes || "Não apresenta notas"}</span>
                    <span className="expense-request-item-desc">{item.expenseId}</span>
                </div>
                <div className="expense-request-item-type" >
                    <span className="expense-request-item-title">VALOR</span>
                    <span className="expense-request-item-content">{getCurrencyAmountSpent()}</span>
                    <span className="expense-request-item-desc">{getCurrencyAmountTotal()}</span>
                </div>
            </div>
            <div className="expense-request-item-status" >
                <span className="expense-request-item-title">STATUS</span>
                <div className="expense-request-item-status-badge-ok"> <span>{item.status}</span></div>
                {item.expenseEvaluation && (
                    <>
                        <div className="expense-request-item-status-badge-default"> <span>Dedutivel</span></div>
                        <span className="expense-request-item-desc">Valor aprovado: RS 111112,22</span>
                    </>
                )}

            </div>
            <div className="expense-request-item-see-approval" >
                <i className="fas fa-receipt"></i>
                <span >Ver Nota Fiscal</span>
            </div>
        </div>
    );
}

export default RequestExpenseItem;