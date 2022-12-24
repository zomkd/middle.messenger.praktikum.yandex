import { IListeners, TypeHandler } from './types';

export class EventBus {
  listeners: IListeners;

  constructor() {
    this.listeners = {};
  }

  on(event: string, handler: TypeHandler) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(handler);
  }

  off(event: string, handler: TypeHandler) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }
    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== handler,
    );
  }

  emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach((listener) => listener(...args));
  }
}
