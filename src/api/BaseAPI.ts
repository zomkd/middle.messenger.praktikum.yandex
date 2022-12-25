import HttpTransport from '../utils/httpTrasnsport/http-transport';

export default abstract class BaseAPI {
  protected http: HttpTransport;

  protected constructor(endpoint: string) {
    this.http = new HttpTransport(endpoint);
  }

  public create?(data: unknown): Promise<unknown>;

  public read?(identifier?: string): Promise<unknown>;

  public update?(identifier: string, data: unknown): Promise<unknown>;

  public delete?(identifier: string): Promise<unknown>;
}
