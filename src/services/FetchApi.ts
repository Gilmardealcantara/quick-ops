import { TOKEN_STORAGE_KEY } from 'src/utils/constants';
import HttpErrorHandler from './HttpErrorHandler';

export interface FetchApiError {
  statusCode: number;
  statusText: string;
  message: string;
}

export interface FetchApiResponse {
  data?: any;
  error?: FetchApiError;
  controller: AbortController;
}

export default class FetchAPI {
  private baseURI: string;

  constructor(baseURI: string) {
    this.baseURI = baseURI;
  }

  private formatURL = (resource: string) => this.baseURI + resource;

  private getHeaders = () =>
    new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem(TOKEN_STORAGE_KEY)}`,
    });

  private sendRequest = async (uri: string, requestInfo: RequestInit): Promise<FetchApiResponse> => {
    const controller = new AbortController();

    // eslint-disable-next-line no-param-reassign
    requestInfo.signal = controller.signal;

    try {
      const response = await fetch(uri, requestInfo);
      if (response.ok) {
        return {
          data: await response.json(),
          controller,
        };
      }
      return HttpErrorHandler.getFetchApiResponse(response, controller);
    } catch (error) {
      return {
        controller,
        error: {
          statusCode: -1,
          statusText: '-1',
          message: error.message,
        },
      };
    }
  };

  async get(resource: string): Promise<FetchApiResponse> {
    const uri = this.formatURL(resource);
    const requestInfo = {
      headers: this.getHeaders(),
    };
    return this.sendRequest(uri, requestInfo);
  }

  post(resource: string, data: any): Promise<FetchApiResponse> {
    const uri = this.formatURL(resource);
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: this.getHeaders(),
    };
    return this.sendRequest(uri, requestInfo);
  }

  update(resource: string, data: any): Promise<FetchApiResponse> {
    const uri = this.formatURL(resource);
    const requestInfo = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: this.getHeaders(),
    };
    return this.sendRequest(uri, requestInfo);
  }

  delete(resource: string, resourceId: any): Promise<FetchApiResponse> {
    let uri = this.formatURL(resource);
    uri = `${uri}/${resourceId}`;
    const requestInfo = {
      method: 'DELETE',
      headers: this.getHeaders(),
    };
    return this.sendRequest(uri, requestInfo);
  }
}
