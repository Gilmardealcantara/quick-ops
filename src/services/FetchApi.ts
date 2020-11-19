import { TOKEN_STORAGE_KEY, API_URL } from 'src/utils/constants';
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

class FetchAPI {
  private static formatURL = (resource: string) => API_URL + resource;

  private static getHeaders = () =>
    new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem(TOKEN_STORAGE_KEY)}`,
    });

  private static sendRequest = async (uri: string, requestInfo: RequestInit): Promise<FetchApiResponse> => {
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

  static get(resource: string): Promise<FetchApiResponse> {
    const uri = FetchAPI.formatURL(resource);
    const requestInfo = {
      headers: FetchAPI.getHeaders(),
    };
    return FetchAPI.sendRequest(uri, requestInfo);
  }

  static post(resource: string, data: any): Promise<FetchApiResponse> {
    const uri = FetchAPI.formatURL(resource);
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: FetchAPI.getHeaders(),
    };
    return FetchAPI.sendRequest(uri, requestInfo);
  }

  static update(resource: string, data: any): Promise<FetchApiResponse> {
    const uri = FetchAPI.formatURL(resource);
    const requestInfo = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: FetchAPI.getHeaders(),
    };
    return FetchAPI.sendRequest(uri, requestInfo);
  }

  static delete(resource: string, resourceId: any): Promise<FetchApiResponse> {
    let uri = FetchAPI.formatURL(resource);
    uri = `${uri}/${resourceId}`;
    const requestInfo = {
      method: 'DELETE',
      headers: FetchAPI.getHeaders(),
    };
    return FetchAPI.sendRequest(uri, requestInfo);
  }
}

export default FetchAPI;
