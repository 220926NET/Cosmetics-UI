import { TestBed } from '@angular/core/testing';

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
});
