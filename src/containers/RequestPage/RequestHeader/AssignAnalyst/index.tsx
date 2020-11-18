import React from 'react';
import { Input } from 'antd';
import './style.css';

const AssignAnalyst = () => (
  <div className='request-header-assign-analyst'>
    <span className='request-header-assign-analyst-title'>Atribuir Analisa</span>
    <Input placeholder='Atribuir analista' />
    <span className='request-header-assign-analyst-key'>Centro de Custo</span>
    <span className='request-header-assign-analyst-value'>100% - Approval CC Test</span>
  </div>
);

export default AssignAnalyst;
