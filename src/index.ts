import http = require('http')
import { WebSocketServer, WebSocket } from 'ws'

export interface Data {
    map?: {
        mode: string | 'deathmatch'
        name: string
        phase: 'live'
        | 'bomb'
        | 'over'
        | 'freezetime'
        | 'paused'
        | 'defuse'
        | 'timeout_t'
        | 'timeout_ct'
        | 'warmup'
        round: number
        team_ct: {
            score: number
            consecutive_round_losses: number
            timeouts_remaining: number
            matches_won_this_series: number
        },
        team_t: {
            score: number
            consecutive_round_losses: number
            timeouts_remaining: number
            matches_won_this_series: number
        },
        num_matches_to_win_series: number
        current_spectators: number
        souvenirs_total: number
    }
    round?: {
        phase: 'live'
        | 'bomb'
        | 'over'
        | 'freezetime'
        | 'paused'
        | 'defuse'
        | 'timeout_t'
        | 'timeout_ct'
        | 'warmup'
    }
    player: {
        steamid: string
        clan?: string
        name: string
        team?: 'T' | 'CT'
        activity: 'menu' | 'playing'
        state?: {
            health: number
            armor: number
            helmet: boolean
            flashed: number
            smoked: number
            burning: number
            money: number
            round_kills: number
            round_killhs: number
            round_totaldmg: number
            equip_value: number
        }
        weapons?: {
            [key: string]: {
                name: string
                paintkit: string
                type: 'Knife'
                state: 'holstered' | 'active'
            } | {
                name: string
                paintkit: string
                type: 'Pistol' | 'Rifle'
                ammo_clip: number
                ammo_clip_max: number
                ammo_reserve: number
                state: 'holstered' | 'active'
            } | {
                name: 'weapon_taser'
                paintkit: string
                ammo_clip: number
                ammo_clip_max: number
                ammo_reserve: number
                state: 'holstered' | 'active'
            } | {
                name: 'weapon_hegrenade' | 'weapon_flashbang' | 'weapon_smokegrenade' | 'weapon_decoy' | 'weapon_incgrenade' | 'weapon_molotov'
                paintkit: string
                type: 'Grenade'
                ammo_reserve: number
                state: 'holstered' | 'active'
            }
        }
        match_stats?: {
            kills: number
            assists: number
            deaths: number
            mvps: number
            score: number
        }
    }
    previously?: {
        player?: {
            activity: 'menu' | 'playing'
        }
    }
    added?: {
        player?: {
            state: boolean
            weapons: boolean
            match_stats: boolean
        }
    }
    auth: {
        the853: 'rtx3070ti'
    }
}

export class Event {
    events: any
    constructor() {
        this.events = Object.create(null)
    }
    // tslint:disable-next-line: ban-types
    on(name: string, fn: Function) {
        if (!this.events[name]) {
            this.events[name] = []
        }
        this.events[name].push(fn)
        return this
    }
    emit(name: string, ...args: any) {
        if (!this.events[name]) {
            return this
        }
        const fns = this.events[name]
        fns.forEach((fn: any) => fn.call(this, ...args))
        return this
    }
    // tslint:disable-next-line: ban-types
    off(name: string, fn: Function) {
        if (!this.events[name]) {
            return this
        }
        if (!fn) {
            this.events[name] = null
            return this
        }
        const index = this.events[name].indexOf(fn)
        this.events[name].splice(index, 1)
        return this
    }
    // tslint:disable-next-line: ban-types
    once(name: string, fn: Function) {
        const only = () => {
            fn.apply(this, arguments)
            this.off(name, only)
        }
        this.on(name, only)
        return this
    }
}
// 建立监听CSGO发来的数据
export class HServer extends Event {
    port = 8532
    host = '127.0.0.1'
    server: http.Server
    conf = {
        wss: {
            enable: false,
            port: 8523,
        }
    }
    wss: WebSocketServer
    body = ''
    Start() {
        if (this.server) return console.log('is Listening at http://' + this.host + ':' + this.port)
        this.server = http.createServer((req, res) => {
            this.createServer(req, res)
        })
        this.server.listen(this.port, this.host)
        console.log('Listening at http://' + this.host + ':' + this.port)
        if (!this.wss && this.conf.wss.enable) {
            this.wss = new WebSocketServer({
                port: this.conf.wss.port,
            })
        }
        this.emit('open', 'Listening')
    }
    async Stop() {
        await new Promise((resolve) => {
            this.server.close(e => resolve(e))
        })
        await new Promise((resolve) => {
            this.wss.close(e => resolve(e))
        })
        this.emit('close', 'closed')
    }
    createServer(req: http.IncomingMessage, res: http.ServerResponse) {
        if (req.method == 'POST') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            let body = ''
            req.on('data', (data) => {
                body += data
            })
            req.on('end', () => {
                if (typeof body === 'string') {
                    if (this.body != body) {
                        this.body = body
                        let response: Data = JSON.parse(body)
                        let msg = JSON.stringify(response)
                        this.emit('message', response)
                        if (this.conf.wss.enable) this.wss.clients.forEach(client => client.send(msg))
                        console.log('POST payload: ', response)
                    }
                }
                res.end('')
            })
        }
        else {
            console.log('Not expecting other request types...')
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end('<html><body>HTTP Server at http://' + this.host + ':' + this.port + '</body></html>')
        }
    }
}

// let hServer = new HServer()
// hServer.conf.wss.enable = true
// hServer.on('message', (response: Data) => {
//     console.log('getdata', response)
// })
// hServer.Start()
