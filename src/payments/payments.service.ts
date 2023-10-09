import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class PaymentsService {
  paymentsSubject = new Subject();
  payments$: Observable<any> = this.paymentsSubject.asObservable();
}
