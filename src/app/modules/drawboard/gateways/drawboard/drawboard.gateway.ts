import { WebSocketGateway, SubscribeMessage, WsResponse, WebSocketServer, WsException } from '@nestjs/websockets';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

@WebSocketGateway(81)
export class DrawboardGateway {

    @WebSocketServer() server;

    messages = [];

    @SubscribeMessage('sync')
    onEvent(client, data) {
        const event = 'events';
        const syncTime = data.lastSync || -1;
        const response = this.messages
            .filter(res => res.createdAt >= syncTime);
        return Observable.from(response)
            .map(res => ({
                event,
                data: res
            }));
    }

    @SubscribeMessage('message')
    onMessage(client, data) {
        const event = 'events';
        const msg = data.msg;
        this.messages.push({
            msg: msg,
            createdAt: Date.now()
        });
    }

}
