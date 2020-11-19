import React, { memo } from 'react';
import { format } from 'date-fns';
import { TimelineItem } from 'src/store/modules/timeline/types';
import './style.css';

interface Props {
  item: TimelineItem;
}

const RequestAccountabilityItem = ({ item }: Props) => {
  const getIconClass = (code: string) => (code ? `fas fa-${code}` : 'fas fa-asterisk');

  return (
    <div className='accountability-request-item'>
      <div className='accountability-request-item-icon'>
        <div className='accountability-request-item-icon-container'>
          <i className={getIconClass(item.expenseTypeIcon)} />
        </div>
        <span className='accountability-request-item-icon-date'>{format(new Date(item.cardDate), 'dd/MM/yyyy')}</span>
      </div>
      <div className='accountability-request-item-type'>
        <span className='accountability-request-item-type-title'>TIPO</span>
        <span className='accountability-request-item-type-content'>{item.notes || 'Não apresenta notas'}</span>
      </div>
    </div>
  );
};

export default memo(RequestAccountabilityItem);
