import { TestBed } from '@angular/core/testing';

import { TeacherProMarksService } from './teacher-pro-marks.service';

describe('TeacherProMarksService', () => {
  let service: TeacherProMarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherProMarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
