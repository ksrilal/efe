import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseInvoiceComponent } from './student-course-invoice.component';

describe('StudentCourseInvoiceComponent', () => {
  let component: StudentCourseInvoiceComponent;
  let fixture: ComponentFixture<StudentCourseInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCourseInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCourseInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
