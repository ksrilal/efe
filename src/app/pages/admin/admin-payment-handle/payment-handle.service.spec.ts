import { TestBed } from '@angular/core/testing';

import { PaymentHandleService } from './payment-handle.service';

describe('PaymentHandleService', () => {
  let service: PaymentHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
