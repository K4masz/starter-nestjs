import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { PaymentsService } from './payments/payments.service';

@Module({
  imports: [EventsModule],
  controllers: [AppController],
  providers: [AppService, PaymentsService],
})
export class AppModule {}
