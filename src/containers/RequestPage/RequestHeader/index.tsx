import { Skeleton } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import { ApplicationState } from 'src/store';
import { loadHeaderData } from 'src/store/modules/headerData/actions';
import { HeaderDataState } from 'src/store/modules/headerData/types';

import AssignAnalyst from './AssignAnalyst';
import KeyValue from './KeyValue';

import './style.css';

const RequestHeader = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector<ApplicationState, HeaderDataState>((state) => state.headerData);

  useEffect(() => {
    dispatch(loadHeaderData());
  }, []);

  const formatDate = (dateInt: number) => format(new Date(dateInt), 'dd/MM/yyyy');

  const formatPeopleQnt = (qnt: number) => (qnt === 1 ? `${qnt} pessoa` : `${qnt} pessoas`);

  const formatHasBreakfast = (hasCoffee?: boolean) => (hasCoffee ? 'sim' : 'não');

  return (
    <div className='request-reader-container'>
      {loading || !data ? (
        <>
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <>
          <span className='request-reader-title'>{data.title}</span>
          <div className='request-reader-body'>
            <div className='request-header-key-value-list'>
              <KeyValue name='Nome' value={data.collaborator.name} />
              <KeyValue name='Email' value={data.collaborator.email} />
              <KeyValue name='Justificativa' value={data.justification} />
              <KeyValue name='Finalidade' value={data.purpose} />
              <KeyValue name='Projeto' value={data.project.title} />
              <KeyValue name='Data' value={formatDate(data.createdOn)} />
              <KeyValue name='quantidade' value={formatPeopleQnt(data.accountabilityExtraInfo.amountOfPeople)} />
              <KeyValue
                name='Incluir Café da Manhã'
                value={formatHasBreakfast(data.accountabilityExtraInfo.budgetForBreakfast)}
              />
            </div>
            <span className='request-header-divider' />
            <AssignAnalyst />
          </div>
        </>
      )}
    </div>
  );
};

export default RequestHeader;
