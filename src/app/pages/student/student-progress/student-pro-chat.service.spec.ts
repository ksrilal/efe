import { TestBed } from '@angular/core/testing';

import { StudentProChatService } from './student-pro-chat.service';

describe('StudentProChatService', () => {
  let service: StudentProChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentProChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
