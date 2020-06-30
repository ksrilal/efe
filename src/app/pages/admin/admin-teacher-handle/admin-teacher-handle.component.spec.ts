import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherHandleComponent } from './admin-teacher-handle.component';

describe('AdminTeacherHandleComponent', () => {
  let component: AdminTeacherHandleComponent;
  let fixture: ComponentFixture<AdminTeacherHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTeacherHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeacherHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
