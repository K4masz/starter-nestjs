import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';
import { PaymentsService } from '../payments/payments.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  constructor(private paymentsService: PaymentsService) {}
  @SubscribeMessage('payments')
  findAll(): Observable<WsResponse<number>> {
    return this.paymentsService.payments$.pipe(
      map((notification) => ({ event: 'payments', data: notification })),
    );
  }
}
