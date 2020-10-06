import { TestBed } from '@angular/core/testing';

import { AdminStudentHandleService } from './admin-student-handle.service';

describe('AdminStudentHandleService', () => {
  let service: AdminStudentHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminStudentHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
