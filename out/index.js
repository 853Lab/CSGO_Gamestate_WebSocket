"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HServer = exports.Event = void 0;
const http = require("http");
const ws_1 = require("ws");
class Event {
    events;
    constructor() {
        this.events = Object.create(null);
    }
    // tslint:disable-next-line: ban-types
    on(name, fn) {
        if (!this.events[name]) {
            this.events[name] = [];
        }
        this.events[name].push(fn);
        return this;
    }
    emit(name, ...args) {
        if (!this.events[name]) {
            return this;
        }
        const fns = this.events[name];
        fns.forEach((fn) => fn.call(this, ...args));
        return this;
    }
    // tslint:disable-next-line: ban-types
    off(name, fn) {
        if (!this.events[name]) {
            return this;
        }
        if (!fn) {
            this.events[name] = null;
            return this;
        }
        const index = this.events[name].indexOf(fn);
        this.events[name].splice(index, 1);
        return this;
    }
    // tslint:disable-next-line: ban-types
    once(name, fn) {
        const only = () => {
            fn.apply(this, arguments);
            this.off(name, only);
        };
        this.on(name, only);
        return this;
    }
}
exports.Event = Event;
// 建立监听CSGO发来的数据
class HServer extends Event {
    port = 8532;
    host = '127.0.0.1';
    server;
    conf = {
        wss: {
            enable: false,
            port: 8523,
        }
    };
    wss;
    body = '';
    Start() {
        if (this.server)
            return console.log('is Listening at http://' + this.host + ':' + this.port);
        this.server = http.createServer((req, res) => {
            this.createServer(req, res);
        });
        this.server.listen(this.port, this.host);
        console.log('Listening at http://' + this.host + ':' + this.port);
        if (!this.wss && this.conf.wss.enable) {
            this.wss = new ws_1.WebSocketServer({
                port: this.conf.wss.port,
            });
        }
        this.emit('open', 'Listening');
    }
    async Stop() {
        await new Promise((resolve) => {
            this.server.close(e => resolve(e));
        });
        await new Promise((resolve) => {
            this.wss.close(e => resolve(e));
        });
        this.emit('close', 'closed');
    }
    createServer(req, res) {
        if (req.method == 'POST') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            req.on('end', () => {
                if (typeof body === 'string') {
                    if (this.body != body) {
                        this.body = body;
                        let response = JSON.parse(body);
                        let msg = JSON.stringify(response);
                        this.emit('message', response);
                        if (this.conf.wss.enable)
                            this.wss.clients.forEach(client => client.send(msg));
                        console.log('POST payload: ', response);
                    }
                }
                res.end('');
            });
        }
        else {
            console.log('Not expecting other request types...');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<html><body>HTTP Server at http://' + this.host + ':' + this.port + '</body></html>');
        }
    }
}
exports.HServer = HServer;
// let hServer = new HServer()
// hServer.conf.wss.enable = true
// hServer.on('message', (response: Data) => {
//     console.log('getdata', response)
// })
// hServer.Start()
