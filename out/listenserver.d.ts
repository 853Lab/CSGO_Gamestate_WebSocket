/// <reference types="node" />
import http = require('http');
import { EventEmiter } from './method';
import { WebSocketServer } from 'ws';
/** 建立监听CSGO发来的数据 */
export declare class ListenServer extends EventEmiter {
    /** 域名或IP */
    host: string;
    /** 端口 */
    port: number;
    server: http.Server;
    conf: {
        wss: {
            enable: boolean;
            port: number;
        };
    };
    wss: WebSocketServer;
    body: string;
    Start(): void;
    Stop(): Promise<void>;
    createServer(req: http.IncomingMessage, res: http.ServerResponse): void;
}
