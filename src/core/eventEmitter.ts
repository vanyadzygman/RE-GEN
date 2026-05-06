export class EventEmitter {
    listeners: { [event: string]: Function[] } = {};

    on(event: string, fn: Function) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(fn);
    }

    off(event: string, fn: Function) {
        if (!this.listeners[event]) return;
        this.listeners[event] = this.listeners[event].filter(f => f !== fn);
    }

    emit(event: string, data: unknown) {
        if (!this.listeners[event]) return;
        this.listeners[event].forEach(fn => fn(data));
    }
}

export const emitter = new EventEmitter();
