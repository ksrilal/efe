import { TestBed } from '@angular/core/testing';

import { AdminTeacherHandleService } from './admin-teacher-handle.service';

describe('AdminTeacherHandleService', () => {
  let service: AdminTeacherHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTeacherHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
