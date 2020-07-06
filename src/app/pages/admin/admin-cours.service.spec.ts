import { TestBed } from '@angular/core/testing';

import { AdminCoursService } from './admin-cours.service';

describe('AdminCoursService', () => {
  let service: AdminCoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
