import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('payments')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    console.log('hurray');
    return from([1, 2, 3]).pipe(
      map((item) => ({ event: 'payments', data: item })),
    );
  }
}
