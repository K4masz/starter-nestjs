import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsService } from './payments/payments.service';
import { EventsGateway } from './events/events.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PaymentsService, EventsGateway],
})
export class AppModule {}
