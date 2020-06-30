import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentHandleComponent } from './admin-student-handle.component';

describe('AdminStudentHandleComponent', () => {
  let component: AdminStudentHandleComponent;
  let fixture: ComponentFixture<AdminStudentHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
