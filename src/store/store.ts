import { set } from './helpers';
import { EventBus } from '../utils/event-bus/event-bus';

export enum StoreEvents {
  Updated = 'updated',
}

export class Store extends EventBus {
  private state: any = {};

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);
    this.emit(StoreEvents.Updated, this.getState());
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();
export default store;
