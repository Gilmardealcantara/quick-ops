import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, DatePicker, Form, Input, InputNumber, notification, Select } from 'antd';

import FetchAPI from 'src/services/FetchApi';
import { addNewExpense } from 'src/store/modules/timeline/actions';
import { setReadStatus } from 'src/store/modules/appStatus/actions';

import { expenseTypesOptions, currencyOptions, currencyFormatter, currencyParser } from './FormHelper';
import './style.css';

interface ApiResponse {
  type: 'error' | 'success' | 'warning';
  message: string;
}

export interface Expense {
  expenseTypeCode?: string;
  currencyCode?: string;
  amountSpent?: number;
  amountTotal?: number;
  notes?: string;
  resourceUrl?: string;
  cardDate?: number;
}

const NewExpenseForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>();
  const [currencyCodeKey, setCurrencyCodeKey] = useState<string>();
  const [form] = Form.useForm();

  const openNotification = (response: ApiResponse) => {
    notification.open({
      message: response.message,
      type: response.type,
    });
  };

  const resetForm = () => {
    form.resetFields();
    setCurrencyCodeKey(undefined);
  };

  const saveNewExpense = async (expense: Expense) => {
    setLoading(true);
    const { error, data } = await FetchAPI.post('/expense/add', expense);
    setLoading(false);
    if (!error) {
      openNotification({ message: 'Despesa adicionda com sucesso', type: 'success' });
      dispatch(addNewExpense({ ...data, currencySymbol: data.currencyCode }));
      resetForm();
    } else {
      openNotification({ message: 'Falha ao salvar dados, tente novamente mais tarde', type: 'error' });
    }
  };

  const onFinish = (values: any) => {
    const payload = {
      expenseTypeCode: values.expenseTypeCode,
      currencyCode: values.currencyCodeKey.split('::')[1],
      amountSpent: Number(values.amountSpent.toFixed(2)),
      amountTotal: Number(values.amountTotal.toFixed(2)),
      notes: values.notes,
      resourceUrl: values.resourceUrl,
      cardDate: values.cardDate.valueOf(),
    };
    saveNewExpense(payload);
  };
  return (
    <div data-testid='new-enxpense-form' className='receipt-form-container'>
      <Form form={form} onFinish={onFinish}>
        <div className='receipt-form-fields'>
          <div className='receipt-form-field'>
            <span>Tipo *</span>
            <Form.Item name='expenseTypeCode' rules={[{ required: true, message: 'Obrigatório' }]}>
              <Select data-testid='form-select-expenseTypeCode' placeholder='Tipo'>
                {expenseTypesOptions.map((op) => (
                  <Select.Option key={op.value} value={op.value}>
                    {op.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <div className='receipt-form-field'>
            <span>Moeda *</span>
            <Form.Item name='currencyCodeKey' rules={[{ required: true, message: 'Obrigatório' }]}>
              <Select
                data-testid='form-select-currencyCodeKey'
                placeholder='Moeda'
                onChange={(value: string) => {
                  setCurrencyCodeKey(value);
                }}
              >
                {currencyOptions.map((op) => (
                  <Select.Option key={op.value} value={op.value}>
                    {op.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>
        <div className='receipt-form-field'>
          <span>Descrição da despesa</span>
          <Form.Item name='notes' rules={[{ required: true, message: 'Obrigatório' }]}>
            <Input data-testid='form-intput-notes' style={{ width: '48%' }} placeholder='Descrição da despesa' />
          </Form.Item>
        </div>
        <div className='receipt-form-field'>
          <span>Data do comprovante</span>
          <Form.Item name='cardDate' rules={[{ required: true, message: 'Obrigatório' }]}>
            <DatePicker
              data-testid='form-datepicker-cardDate'
              placeholder='Selecione uma data'
              style={{ width: '48%' }}
              format='DD/MM/YYYY'
            />
          </Form.Item>
        </div>
        {currencyCodeKey && (
          <div className='receipt-form-fields'>
            <div className='receipt-form-field'>
              <span>Valor total da nota/cupom</span>
              <Form.Item name='amountTotal' rules={[{ required: true, message: 'Deve conter um valor acima de zero' }]}>
                <InputNumber
                  data-testid='form-input-amountTotal'
                  defaultValue={0}
                  style={{
                    width: '100%',
                    marginRight: '1rem',
                  }}
                  formatter={currencyFormatter(currencyCodeKey)}
                  parser={currencyParser}
                />
              </Form.Item>
            </div>
            <div className='receipt-form-field'>
              <span>Valor a ser considerado</span>
              <Form.Item name='amountSpent' rules={[{ required: true, message: 'Deve conter um valor acima de zero' }]}>
                <InputNumber
                  data-testid='form-input-amountSpent'
                  defaultValue={0}
                  style={{
                    width: '100%',
                    marginRight: '1rem',
                  }}
                  formatter={currencyFormatter(currencyCodeKey)}
                  parser={currencyParser}
                />
              </Form.Item>
            </div>
          </div>
        )}
        <div className='action-buttons'>
          <Button
            onClick={() => {
              resetForm();
              dispatch(setReadStatus());
            }}
          >
            Cancelar
          </Button>
          <Button data-testid='submit-form-button' type='primary' htmlType='submit' loading={loading}>
            {loading ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewExpenseForm;
