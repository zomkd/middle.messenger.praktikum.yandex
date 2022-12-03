export type TypeHandler = (...args: any[]) => any | void;

export interface IListeners {
  [key: string]: TypeHandler[];
}
