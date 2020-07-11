import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyregComponent } from './applyreg.component';

describe('ApplyregComponent', () => {
  let component: ApplyregComponent;
  let fixture: ComponentFixture<ApplyregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
