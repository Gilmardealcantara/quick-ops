import React, { useRef } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadFile, UploadChangeParam } from 'antd/lib/upload/interface';

import FileUploadService from './FileUploadService';

import './style.css';

interface Props {
  setResourceUrl(url: string): void;
}

const ReceiptAttachment = ({ setResourceUrl }: Props) => {
  const formRef = useRef();

  function handleChange(info: UploadChangeParam<UploadFile<any>>) {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      setResourceUrl(info.file.response.url);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  return (
    <div className='receipt-attach'>
      <div className='receipt-attach-container'>
        <span className='receipt-title'>Envie o comprovante</span>
        <span className='receipt-desc'>Você pode inserir arquivos nos formatos PNG, JPG ou PDF. Tamanho máx: 10MB</span>

        <Upload
          ref={formRef}
          name='file'
          action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
          headers={{
            authorization: 'authorization-text',
          }}
          className='receipt-button'
          beforeUpload={FileUploadService.beforeUpload}
          onChange={handleChange}
        >
          <Button icon={<UploadOutlined />}>Escolher arquivo</Button>
        </Upload>
      </div>
    </div>
  );
};
export default ReceiptAttachment;
