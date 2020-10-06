import { TestBed } from '@angular/core/testing';

import { AdminCourseHandleService } from './admin-course-handle.service';

describe('AdminCourseHandleService', () => {
  let service: AdminCourseHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCourseHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
