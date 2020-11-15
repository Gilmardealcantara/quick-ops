import React from 'react';

import { UpCircleOutlined, DownCircleOutlined } from '@ant-design/icons';
import './style.css';


const RequestSideBar = () => (
    <div className="request-side-bar">
        <div className="request-side-bar-status-card">
            <span className="request-side-bar-status-card-title"> Status </span>
            <span className="request-side-bar-status-card-desc"> Concluído </span>
        </div>
        <div className="request-side-bar-coins">
            <div className="request-side-bar-coin">
                <span className="title">SALDO</span>
                <span className="value">-AU$ 12,12</span>
                <div className="balance-details">
                    <div className="debit">
                        <UpCircleOutlined className="details-icon" />
                        <div>
                            <span className="details-title">Gastou</span>
                            <span className="details-value">-AU$ 0,00</span>
                        </div>
                    </div>
                    <span className="divider" />
                    <div className="credit">
                        <DownCircleOutlined className="details-icon" />
                        <div>
                            <span className="details-title">Recebeu</span>
                            <span className="details-value">-AU$ 12,12</span>
                        </div>
                    </div>
                </div>

                <span className="extract-title">Extrato</span>
                <span className="extract-divider" />
                <div className="extract-table">
                    <div className="extract-table-head">
                        <span>Descrição</span>
                        <span>Valor</span>
                    </div>
                    <div className="extract-table-row">
                        <span>
                            <span className="extract-key">Despesa Declaradas</span>
                            <span className="extract-desc">Despesas Declaradas pelo trooper</span>
                        </span>
                        <span className="extract-value">AU$ 0,00</span>
                    </div>

                </div>
            </div>
        </div>

    </div>
)

export default RequestSideBar;