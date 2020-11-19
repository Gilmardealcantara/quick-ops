import React, { memo } from 'react';
import './style.css';

interface Props {
  status: string;
}
const Badge = ({ status }: Props) => (
  <div className={`expense-request-item-status-badge expense-request-item-status-badge-${status}`}>
    <span>{status}</span>
  </div>
);

export default memo(Badge);
