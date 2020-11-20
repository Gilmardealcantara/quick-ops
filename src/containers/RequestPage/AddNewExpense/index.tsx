import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Animate from 'rc-animate';

import { ApplicationState } from 'src/store';
import { AppAction, AppStatusState } from 'src/store/modules/appStatus/types';
import { setEditStatus } from 'src/store/modules/appStatus/actions';
import NewExpenseForm from './NewExpenseForm';

import './style.css';

const AddNewExpense = () => {
  const dispatch = useDispatch();
  const { status } = useSelector<ApplicationState, AppStatusState>((state) => state.appStatus);

  return (
    <>
      <div className='add-new-expense'>
        <button
          data-testid='add-new-expense-button'
          type='button'
          className='add-new-expense-button'
          onClick={() => {
            dispatch(setEditStatus());
          }}
        >
          <i className='fas fa-receipt' />
          <span>Adicionar despesa</span>
        </button>
      </div>
      <Animate transitionName='fade'>
        {status === AppAction.EDIT ? (
          <div data-testid='add-new-expense-form' className='add-new-expense-form'>
            <span className='expense-form-title'>Nova Despesa</span>
            <div className='expense-form-content'>
              <NewExpenseForm />
            </div>
          </div>
        ) : null}
      </Animate>
    </>
  );
};

export default AddNewExpense;
