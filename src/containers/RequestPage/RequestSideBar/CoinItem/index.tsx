import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { UpCircleOutlined, DownCircleOutlined } from '@ant-design/icons';

import Extract from './Extract';
import { SideBarData } from '../../../../store/modules/sidebarData/types';
import './style.css';

interface Props {
    sidebarData: SideBarData;
}

const CoinItem = ({ sidebarData }: Props) => {
    const showCurrency = (value: number) => {
        let formatValue = "0,00"
        if (value != 0)
            formatValue = value.toFixed(2).replace('.', ',');
        return `-${sidebarData.currency.symbol} ${formatValue}`;
    }

    return (
        <div className="request-side-bar-coins">
            <div className="request-side-bar-coin">
                <span className="title">SALDO</span>
                <span className="value">{showCurrency(sidebarData.balance)}</span>
                <div className="balance-details">
                    <div className="debit">
                        <UpCircleOutlined className="details-icon" />
                        <div>
                            <span className="details-title">Gastou</span>
                            <span className="details-value">{showCurrency(sidebarData.declared)}</span>
                        </div>
                    </div>
                    <span className="divider" />
                    <div className="credit">
                        <DownCircleOutlined className="details-icon" />
                        <div>
                            <span className="details-title">Recebeu</span>
                            <span className="details-value">{showCurrency(sidebarData.received)}</span>
                        </div>
                    </div>
                </div>

                <Extract sidebarData={sidebarData} />
            </div>
        </div>
    );
}

export default CoinItem;