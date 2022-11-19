import { IListeners, ICallback } from '@/core/event-bus/types';

export class EventBus {
  listeners: IListeners;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: ICallback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: ICallback) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }
    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => listener.callback(...args));
  }
}
