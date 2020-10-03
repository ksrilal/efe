import { TestBed } from '@angular/core/testing';

import { StudentCourseInvoiceService } from './student-course-invoice.service';

describe('StudentCourseInvoiceService', () => {
  let service: StudentCourseInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentCourseInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
