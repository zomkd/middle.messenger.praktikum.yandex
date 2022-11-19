export interface ICallback {
  title: string;
  callback: (...args: any[]) => any | void;
}

export interface IListeners {
  [key: string]: ICallback[];
}
