import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentHandleComponent } from './admin-payment-handle.component';

describe('AdminPaymentHandleComponent', () => {
  let component: AdminPaymentHandleComponent;
  let fixture: ComponentFixture<AdminPaymentHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPaymentHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaymentHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
