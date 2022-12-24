import HttpTransport from '../utils/httpTrasnsport/http-transport';

export default abstract class BaseAPI {
  protected http: HttpTransport;

  protected constructor(endpoint: string) {
    this.http = new HttpTransport(endpoint);
  }

  public abstract create?(data: unknown): Promise<unknown>;

  public abstract read?(identifier?: string): Promise<unknown>;

  public abstract update?(identifier: string, data: unknown): Promise<unknown>;

  public abstract delete?(identifier: string): Promise<unknown>;
}
