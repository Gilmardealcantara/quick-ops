import { message } from 'antd';

class FileUploadService {
  static beforeUpload(file: any) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Você pode fazer upload somente do arquivos JPG e JPEG');
    }
    const isLt1M = file.size / 1024 / 1024 <= 1;
    if (!isLt1M) {
      message.error('O Arquivo deve ter no máximo 1MB!');
    }
    return isJpgOrPng && isLt1M;
  }
}

export default FileUploadService;
