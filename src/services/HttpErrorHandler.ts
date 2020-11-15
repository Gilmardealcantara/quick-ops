import { FetchApiResponse } from "./FetchApi";

class HttpErrorHandler {
    public getFetchApiResponse(response: Response, controller: AbortController): FetchApiResponse {
        if (response.status === 401) {
            return {
                controller,
                error: {
                    statusCode: response.status,
                    statusText: response.statusText,
                    message: 'User unauthorized',
                },
            };
        }

        if (response.status === 400) {
            return {
                controller,
                error: {
                    statusCode: response.status,
                    statusText: response.statusText,
                    message: 'Bad Request',
                },
            };
        }

        if (response.status === 500) {
            return {
                controller,
                error: {
                    statusCode: response.status,
                    statusText: response.statusText,
                    message: 'Internal server errro',
                },
            };
        }

        return {
            controller,
            error: {
                statusCode: response.status,
                statusText: response.statusText,
                message: 'unknonw error',
            },
        };
    } private errorHandler(response: Response, controller: AbortController): FetchApiResponse {
        if (response.status === 401) {
            return {
                controller,
                error: {
                    statusCode: response.status,
                    statusText: response.statusText,
                    message: 'User unauthorized',
                },
            };
        }

        if (response.status === 400) {
            return {
                controller,
                error: {
                    statusCode: response.status,
                    statusText: response.statusText,
                    message: 'Bad Request',
                },
            };
        }

        if (response.status === 500) {
            return {
                controller,
                error: {
                    statusCode: response.status,
                    statusText: response.statusText,
                    message: 'Internal server errro',
                },
            };
        }

        return {
            controller,
            error: {
                statusCode: response.status,
                statusText: response.statusText,
                message: 'unknonw error',
            },
        };
    }
}

export default new HttpErrorHandler();