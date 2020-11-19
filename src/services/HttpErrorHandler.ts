import { FetchApiResponse } from './FetchApi';

class HttpErrorHandler {
  public static getFetchApiResponse(response: Response, controller: AbortController): FetchApiResponse {
    const resp = { controller, success: false };
    if (response.status === 401) {
      return {
        ...resp,
        error: {
          statusCode: response.status,
          statusText: response.statusText,
          message: 'User unauthorized',
        },
      };
    }

    if (response.status === 400) {
      return {
        ...resp,
        error: {
          statusCode: response.status,
          statusText: response.statusText,
          message: 'Bad Request',
        },
      };
    }

    if (response.status === 500) {
      return {
        ...resp,
        error: {
          statusCode: response.status,
          statusText: response.statusText,
          message: 'Internal server errro',
        },
      };
    }

    return {
      ...resp,
      error: {
        statusCode: response.status,
        statusText: response.statusText,
        message: 'unknonw error',
      },
    };
  }

  private static errorHandler(response: Response, controller: AbortController): FetchApiResponse {
    const resp = { controller, success: false };

    if (response.status === 401) {
      return {
        ...resp,
        error: {
          statusCode: response.status,
          statusText: response.statusText,
          message: 'User unauthorized',
        },
      };
    }

    if (response.status === 400) {
      return {
        ...resp,
        error: {
          statusCode: response.status,
          statusText: response.statusText,
          message: 'Bad Request',
        },
      };
    }

    if (response.status === 500) {
      return {
        ...resp,
        error: {
          statusCode: response.status,
          statusText: response.statusText,
          message: 'Internal server errro',
        },
      };
    }

    return {
      ...resp,
      error: {
        statusCode: response.status,
        statusText: response.statusText,
        message: 'unknonw error',
      },
    };
  }
}

export default HttpErrorHandler;
