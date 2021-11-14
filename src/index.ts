import { ListenServer } from './listenserver'
import { Data } from './data'

let listenServer = new ListenServer()
listenServer.conf.wss.enable = true
listenServer.on('message', (response: Data) => {
    console.log('getdata', response)
})
listenServer.Start()
