import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseHandleComponent } from './admin-course-handle.component';

describe('AdminCourseHandleComponent', () => {
  let component: AdminCourseHandleComponent;
  let fixture: ComponentFixture<AdminCourseHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
