import React from 'react';

import { SideBarData } from 'src/store/modules/sidebarData/types';
import './style.css';

interface Props {
  sidebarData: SideBarData;
}

const Extract = ({ sidebarData }: Props) => {
  const showCurrency = (value: number) => {
    let formatValue = '0,00';
    if (value !== 0) {
      formatValue = value.toFixed(2).replace('.', ',');
    }
    return `${sidebarData.currency.symbol} ${formatValue}`;
  };

  return (
    <>
      <span className='extract-title'>Extrato</span>
      <span className='extract-divider' />
      <div className='extract-table'>
        <div className='extract-table-head'>
          <span>Descrição</span>
          <span>Valor</span>
        </div>
        <div className='extract-table-row'>
          <span className='extract-key'>Despesa Declaradas</span>
          <span className='extract-value'>{showCurrency(sidebarData.declared)}</span>
        </div>
        <span className='extract-desc'>Despesas Declaradas pelo trooper</span>
        <div className='extract-table-row'>
          <span className='extract-key'>Despesa Aprovadas</span>
          <span className='extract-value'>{showCurrency(sidebarData.approved)}</span>
        </div>
        <span className='extract-desc'>Despesas Declaradas pelo financeiro</span>
        <div className='extract-table-row'>
          <span className='extract-key'>Pagamento Realizado</span>
          <span className='extract-value-received'>{showCurrency(sidebarData.received)}</span>
        </div>
        <span className='extract-desc'>Pagamento Realizado pelo financeiro</span>
      </div>
    </>
  );
};

export default Extract;
