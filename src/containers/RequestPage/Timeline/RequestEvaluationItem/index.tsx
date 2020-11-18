import { format } from 'date-fns';
import React from 'react';
import { TimelineItem } from 'src/store/modules/timeline/types';
import './style.css';

interface Props {
  item: TimelineItem;
}

const RequestEvaluationItem = ({ item }: Props) => {
  const getIconClass = (code: string) => (code ? `fas fa-${code}` : 'fas fa-users');

  return (
    <div className='evaluation-request-item'>
      <div className='evaluation-request-item-icon'>
        <div className='evaluation-request-item-icon-container'>
          <i className={getIconClass(item.expenseTypeIcon)} />
        </div>
        <span className='evaluation-request-item-icon-date'>{format(new Date(item.cardDate), 'dd/MM/yyyy')}</span>
      </div>
      <div className='evaluation-request-item-type'>
        <span className='evaluation-request-item-type-title'>TIPO</span>
        <span className='evaluation-request-item-type-content'>{item.notes || 'Não apresenta notas'}</span>
      </div>
      <div className='evaluation-request-item-status'>
        <span className='evaluation-request-item-type-title'>STATUS</span>
        <div className='evaluation-request-item-status-badge'>
          <span>{item.status}</span>
        </div>
      </div>
      <div className='evaluation-request-item-see-approval'>
        <span>Ver Aprovações</span>
        <i className='fas fa-chevron-down' />
      </div>
    </div>
  );
};

export default RequestEvaluationItem;
