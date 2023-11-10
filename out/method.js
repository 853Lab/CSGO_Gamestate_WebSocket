"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmiter = exports.RList = exports.snooze = void 0;
/** 异步打盹多少毫秒 */
const snooze = (ms) => new Promise(resolve => setTimeout(resolve, ms));
exports.snooze = snooze;
/** 异步队列 */
class RList {
    time = 200;
    #list = -1;
    async Push() {
        this.#list++;
        await (0, exports.snooze)(this.#list * this.time);
        Promise.resolve().finally(() => {
            setTimeout(() => { this.#list--; }, (this.#list + 1) * this.time);
        });
    }
}
exports.RList = RList;
/** Event触发 */
class EventEmiter {
    static events = new Map();
    static on(event, listener) {
        // @ts-ignore
        if (typeof this.events[event] !== "object") {
            // @ts-ignore
            this.events[event] = [];
        }
        // @ts-ignore
        this.events[event].push(listener);
        return () => this.removeListener(event, listener);
    }
    static removeListener(event, listener) {
        // @ts-ignore
        if (typeof this.events[event] !== "object")
            return;
        // @ts-ignore
        const idx = this.events[event].indexOf(listener);
        if (idx > -1) {
            // @ts-ignore
            this.events[event].splice(idx, 1);
        }
    }
    static emit(event, ...args) {
        // @ts-ignore
        if (typeof this.events[event] !== "object")
            return;
        // @ts-ignore
        this.events[event].forEach((listener) => listener.apply(this, args));
    }
    static once(event, listener) {
        const remove = this.on(event, (...args) => {
            remove();
            listener.apply(this, args);
        });
    }
    static removeAllListeners(event) {
        // @ts-ignore
        if (typeof this.events[event] !== "object")
            return;
        // @ts-ignore
        this.events[event] = [];
    }
    events = new Map();
    on(event, listener) {
        // @ts-ignore
        if (typeof this.events[event] !== "object") {
            // @ts-ignore
            this.events[event] = [];
        }
        // @ts-ignore
        this.events[event].push(listener);
        return () => this.removeListener(event, listener);
    }
    removeListener(event, listener) {
        // @ts-ignore
        if (typeof this.events[event] !== "object")
            return;
        // @ts-ignore
        const idx = this.events[event].indexOf(listener);
        if (idx > -1) {
            // @ts-ignore
            this.events[event].splice(idx, 1);
        }
    }
    emit(event, ...args) {
        // @ts-ignore
        if (typeof this.events[event] !== "object")
            return;
        // @ts-ignore
        this.events[event].forEach((listener) => listener.apply(this, args));
    }
    once(event, listener) {
        const remove = this.on(event, (...args) => {
            remove();
            listener.apply(this, args);
        });
    }
    removeAllListeners(event) {
        // @ts-ignore
        if (typeof this.events[event] !== "object")
            return;
        // @ts-ignore
        this.events[event] = [];
    }
}
exports.EventEmiter = EventEmiter;
