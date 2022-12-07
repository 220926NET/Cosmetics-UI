import { TestBed } from '@angular/core/testing';
import { PaymentInfo } from 'src/app/models/paymentInfo';
import { PaymentInfoServiceService } from './payment-info-service.service';

describe('PaymentInfoServiceService', () => {
  let service: PaymentInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const pInfo: PaymentInfo = new PaymentInfo("test","test","test","test",78945);

  it('should update Payment Info', () => {
    service.savePaymentInfo(pInfo);
    expect(service.paymentInfo).toEqual(pInfo);
  });
});
