/** 异步打盹多少毫秒 */
export declare const snooze: (ms: number) => Promise<unknown>;
/** 异步队列 */
export declare class RList {
    #private;
    time: number;
    Push(): Promise<void>;
}
/** Event触发 */
export declare class EventEmiter {
    static events: Map<any, any>;
    static on(event: string, listener: (...args: any[]) => void): () => void;
    static removeListener(event: string, listener: (...args: any[]) => void): void;
    static emit(event: string, ...args: any[]): void;
    static once(event: string, listener: (...args: any[]) => void): void;
    static removeAllListeners(event: string): void;
    events: Map<any, any>;
    on(event: string, listener: (...args: any[]) => void): () => void;
    removeListener(event: string, listener: (...args: any[]) => void): void;
    emit(event: string, ...args: any[]): void;
    once(event: string, listener: (...args: any[]) => void): void;
    removeAllListeners(event: string): void;
}
