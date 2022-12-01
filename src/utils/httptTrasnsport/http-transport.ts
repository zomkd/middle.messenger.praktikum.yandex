import { stringToQuery } from './helpers';

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Options = {
  method: Method;
  data?: any;
};
type HTTPMethod = (
  path?: string | undefined,
  data?: unknown,
  options?: Options,
) => Promise<Response>;

export default class HttpTransport {
  static API_URL: string = '123';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HttpTransport.API_URL}${endpoint}`;
  }

  public get: HTTPMethod = (path = '/', options: Options) => {
    if (path === '/') {
      path = stringToQuery(options!.data);
    } else {
      path += stringToQuery(options!.data);
    }
    return this.request<Response>(this.endpoint + path);
  };

  public post: HTTPMethod = (path: string, data?: unknown) => {
    return this.request<Response>(this.endpoint + path, {
      method: Method.POST,
      data,
    });
  };

  public put: HTTPMethod = (path: string, data: unknown) => {
    return this.request<Response>(this.endpoint + path, {
      method: Method.PUT,
      data,
    });
  };

  public patch: HTTPMethod = (path: string, data: unknown) => {
    return this.request<Response>(this.endpoint + path, {
      method: Method.PATCH,
      data,
    });
  };

  public delete: HTTPMethod = (path: string) => {
    return this.request<Response>(this.endpoint + path, {
      method: Method.DELETE,
    });
  };
  private request<Response>(
    url: string,
    optinos: Options = { method: Method.GET },
  ): Promise<Response> {
    const { method, data } = optinos;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onreadystatechange = (e) => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }

        xhr.onabort = () => reject({ reason: 'abort' });
        xhr.onerror = () => reject({ reason: 'network error' });
        xhr.ontimeout = () => reject({ reason: 'timeout' });

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.withCredentials = true;
        xhr.responseType = 'json';

        if (method === Method.GET || !data) {
          xhr.send();
        } else {
          xhr.send(JSON.stringify(data));
        }
      };
    });
  }
}
