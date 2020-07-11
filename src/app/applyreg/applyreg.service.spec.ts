import { TestBed } from '@angular/core/testing';

import { ApplyregService } from './applyreg.service';

describe('ApplyregService', () => {
  let service: ApplyregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
