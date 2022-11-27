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

export default class HttpTransport {
  static API_URL: string = '123';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HttpTransport.API_URL}${endpoint}`;
  }
  public get<Response>(path = '/', options: Options): Promise<Response> {
    if (path === '/') {
      path = stringToQuery(options.data);
    } else {
      path += stringToQuery(options.data);
    }
    return this.request<Response>(this.endpoint + path);
  }

  public post<Response = void>(
    path: string,
    data?: unknown,
  ): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.POST,
      data,
    });
  }

  public put<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.PUT,
      data,
    });
  }

  public patch<Response = void>(
    path: string,
    data: unknown,
  ): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.PATCH,
      data,
    });
  }

  public delete<Response>(path: string): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.DELETE,
    });
  }
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
