import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {PaymentsService} from "./payments/payments.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private paymentsService: PaymentsService) {}

  @Post('/webhook')
  getHello(@Body() data): string {
    this.paymentsService.paymentsSubject.next(data);
    console.log('Payment', data);
    return data;
  }
}
